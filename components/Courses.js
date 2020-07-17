import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

function getCourseWidth(screenWidth) {
  var cardWidth = screenWidth - 40;
  if (screenWidth >= 768) {
    // ipad portrait
    cardWidth = (screenWidth - 60) / 2;
  }
  if (screenWidth >= 1024) {
    // ipad landscape
    cardWidth = (screenWidth - 80) / 3;
  }
  return cardWidth;
}

class Courses extends React.Component {
  state = {
    cardWidth: getCourseWidth(screenWidth),
  };
  componentDidMount() {
    Dimensions.addEventListener('change', this.adaptLayout);
  }
  adaptLayout = (dimensions) => {
    this.setState({
      cardWidth: getCourseWidth(dimensions.window.width),
    });
  };
  render() {
    return (
      <Container style={{ elevation: 9, width: this.state.cardWidth }}>
        <Cover>
          <Image source={this.props.image} />
          <Logo source={this.props.logo} resizeMode="contain" />
          <Subtitle>{this.props.subtitle}</Subtitle>
          <Title>{this.props.title}</Title>
        </Cover>
        <Content>
          <Avatar source={this.props.avatar} />
          <Caption>{this.props.caption}</Caption>
          <Author>Designed by: {this.props.author}</Author>
        </Content>
      </Container>
    );
  }
}
export default Courses;

const Container = styled.View`
  width: 335px;
  height: 335px;
  background: white;
  border-radius: 14px;
  margin: 10px 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-width: 1px;
  border-color: #ddd;
  border-bottom-width: 0;
`;
const Cover = styled.View`
  width: 100%;
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 90px;
  left: 50%;
  margin-left: -24px;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
`;
const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 15px;
  text-transform: uppercase;
  margin-left: 20px;
`;
const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;
const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;
const Caption = styled.Text`
  color: #3c4560;
  font-size: 14px;
  font-weight: 500;
`;
const Author = styled.Text`
  color: #3c4560;
  font-size: 13px;
  font-weight: 500;
  margin-top: 4px;
`;
