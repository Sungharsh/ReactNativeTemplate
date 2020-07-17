import React from 'react';
import styled from 'styled-components';
import { ImageBackground, PointPropType } from 'react-native';

export const Card = (props) => (
  <Container style={{ elevation: 6 }}>
    <Cover>
      <ImageBackground
        source={{ uri: props.image }}
        style={{ width: '100%', height: '100%' }}
      >
        <Title>{props.title}</Title>
      </ImageBackground>
    </Cover>
    <Content>
      <Logo source={{ uri: props.logo }} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle} </Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

const Container = styled.View`
  width: 315px;
  height: 280px;
  background-color: white;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-width: 1px;
  border-color: #ddd;
  border-bottom-width: 0;
`;
const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
  margin-top: 4px;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
`;
