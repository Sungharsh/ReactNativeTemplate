import React from 'react';
import styled from 'styled-components';
import {
  StatusBar,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

class SectionScreen extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
  }
  componentWillUnmount() {
    StatusBar.setBarStyle('dark-content', true);
  }
  render() {
    const { route } = this.props;
    const section = route.params.section;

    return (
      <Container>
        <StatusBar hidden />
        <Cover>
          <ImageBackground
            source={section.image}
            style={{ width: '100%', height: '100%' }}
          >
            <Wrapper>
              <Logo source={section.logo} />
              <Subtitle>{section.subtitle}</Subtitle>
            </Wrapper>
            <Title>{section.title}</Title>
            <Caption>{section.caption}</Caption>
          </ImageBackground>
        </Cover>
        <TouchableOpacity
          style={{ position: 'absolute', top: 20, right: 20 }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <CloseView>
            <Ionicons
              name="ios-close-circle-outline"
              size={36}
              color="#477512"
              style={{ marginTop: -2, borderRadius: 10 }}
            />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);

  elevation: 4;
`;
const Cover = styled.View`
  width: 100%;
  height: 200px;

  overflow: hidden;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  /* margin-top: 20px;*/
  margin-left: 50px;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;
const Caption = styled.Text`
  color: white;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;
const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  align-items: center;
`;
const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;
const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;
