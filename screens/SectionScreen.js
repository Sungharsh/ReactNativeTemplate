import React from 'react';
import styled from 'styled-components';
import {
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';
import Markdown from 'react-native-showdown';
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
      <ScrollView>
        <Container>
          <StatusBar hidden />
          <Cover>
            <ImageBackground
              source={{ uri: section.image.url }}
              style={{ width: '100%', height: '100%' }}
            >
              <Wrapper>
                <Logo source={{ uri: section.logo.url }} />
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

          <SafeAreaView>
            <Content>
              <Markdown
                body={section.content}
                css={htmlStyles}
                scalesPageToFit={false}
                scrollEnabled={false}
              />
            </Content>
          </SafeAreaView>
        </Container>
      </ScrollView>
    );
  }
}

export default SectionScreen;

const htmlContent = `
<h2>This is a title</h2>
<p>This <strong>is</strong> a <a href="https://sungharsh.github.io/">link</a></p>
<img src="https://p50.f0.n0.cdn.getcloudapp.com/items/p9uPoWo6/background21.png?v=4c1fdf706773a1e9421ae83709dd1320" />
`;

const htmlStyles = `
  *{
    font-family: -apple-system, Roboto;
    margin: 0;
    padding: 0;
    font-size: 17px;
    line-height: 24px;
    font-weight: normal;
    color: #3c4560;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-top: 50px;
  }
  pre {
    padding: 20px;
    background: #212c4f;
    overflow: hidden;
    word-wrap: break-word;
    border-radius: 10px;
    margin-top: 20px;
  }
  code {
    color: white;
  }
`;

const Content = styled.View`
  width: 100%;
  height: 100%;
  padding: 20px;
  height: 1500px;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
  margin-bottom: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
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
