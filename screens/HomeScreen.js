import React, { Component } from 'react';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { NotificationIcon } from '../components/icons';
import { Logo } from '../components/Logo';
import Courses from '../components/Courses';
import Menu from '../components/Menu';
import { connect } from 'react-redux';
import PersonalDetails from '../components/PersonalDetails';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const CardsQuery = gql`
  {
    cardsCollection {
      items {
        title
        subtitle
        caption
        image {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        logo {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        content
      }
    }
  }
`;

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: 'OPEN_MENU',
      }),
  };
}

class HomeScreen extends Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
    name: this.props.name,
  };

  compomentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
  }
  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == 'openMenu') {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();
      StatusBar.setBarStyle('light-content', true);
    }

    if (this.props.action == 'closeMenu') {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
        useNativeDriver: false,
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
      StatusBar.setBarStyle('dark-content', true);
    }
  };

  render() {
    return (
      <RootView>
        <StatusBar hidden />
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity,
          }}
        >
          <PersonalDetails />
          <SafeAreaView>
            <ScrollView vertical={true} style={{ height: '100%', padding: 1 }}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{ position: 'absolute', top: 0, left: 20 }}
                >
                  <Avatar source={require('../assets/menu.png')} />
                </TouchableOpacity>
                <Title>S9 Celebs Profiles</Title>

                <Name>{this.props.name}</Name>
                <NotificationIcon
                  style={{ position: 'absolute', right: 20, top: 5 }}
                />
              </TitleBar>
              <ScrollView
                style={{
                  flexDirection: 'row',
                  padding: 20,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 30,
                }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                {logos.map((logo, index) => (
                  <Logo image={logo.image} text={logo.text} key={index} />
                ))}
              </ScrollView>
              <Subtitle>React and Styled Components</Subtitle>
              {/* <PersonalDetails /> */}
              <ScrollView
                horizontal={true}
                style={{ paddingBottom: 30 }}
                showsHorizontalScrollIndicator={false}
              >
                <Query query={CardsQuery}>
                  {({ loading, error, data }) => {
                    if (loading) return <Message>Loading...</Message>;
                    if (error)
                      return (
                        <Message>
                          Network error... server error, status code 400, try
                          again later.
                        </Message>
                      );

                    {
                    }

                    return (
                      <CardsContainer>
                        {data.cardsCollection.items.map((card, index) => (
                          <TouchableOpacity
                            key={index}
                            onPress={() =>
                              this.props.navigation.navigate('SectionScreen', {
                                section: card,
                              })
                            }
                          >
                            <Card
                              title={card.title}
                              image={card.image.url}
                              logo={card.logo.url}
                              caption={card.caption}
                              subtitle={card.subtitle}
                              content={card.content}
                            />
                          </TouchableOpacity>
                        ))}
                      </CardsContainer>
                    );
                  }}
                </Query>
                {/* FETCH DATA FROM LOCAL - instead of above query component: */}
                {/* {cards.map((card, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      this.props.navigation.navigate('SectionScreen', {
                        section: card,
                      })
                    }
                  >
                    <Card
                      title={card.title}
                      image={card.image}
                      logo={card.logo}
                      caption={card.caption}
                      subtitle={card.subtitle}
                      content={card.content}
                    />
                  </TouchableOpacity>
                ))} */}
              </ScrollView>
              <Subtitle>Popular Courses</Subtitle>
              <CoursesContainer>
                {courses.map((course, index) => (
                  <Courses
                    key={index}
                    image={course.image}
                    logo={course.logo}
                    subtitle={course.subtitle}
                    title={course.title}
                    avatar={course.avatar}
                    caption={course.caption}
                    author={course.author}
                  />
                ))}
              </CoursesContainer>
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
const CoursesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 10px;
`;
const CardsContainer = styled.View`
  flex-direction: row;
  padding-left: 3px;
`;
const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;
const RootView = styled.View`
  background: black;
  flex: 1;
  margin-bottom: 200px;
`;
const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 10px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 0;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('../assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('../assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('../assets/logo-swift.png'),
    text: 'Swift',
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: 'Sketch',
  },
];

const cards = [
  {
    title: 'React Native for Designers',
    image: require('../assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('../assets/logo-react.png'),
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
  },
  {
    title: 'Styled Components',
    image: require('../assets/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('../assets/logo-react.png'),
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
  },
  {
    title: 'Props and Icons',
    image: require('../assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('../assets/logo-react.png'),
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
  },
  {
    title: 'Static Data and Loop',
    image: require('../assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('../assets/logo-react.png'),
    content:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
  },
];

const courses = [
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Sunny',
    avatar: require('../assets/avatar.png'),
    caption:
      'Complete guide to designing a site using a collaborative design tool',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Sunny',
    avatar: require('../assets/avatar.png'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Sunny',
    avatar: require('../assets/avatar.png'),
    caption: 'Design and interactive prototype',
  },

  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Sunny',
    avatar: require('../assets/avatar.png'),
    caption: 'Create powerful design and code components for your app',
  },
];
