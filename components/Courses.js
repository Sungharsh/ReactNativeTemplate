import React from "react";
import styled from "styled-components";

export const Courses = (props) => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Caption>{props.caption}</Caption>
      <Author>Designed by: {props.author}</Author>
    </Content>
  </Container>
);
const Container = styled.View`
  width: 335px;
  height: 335px;
  background: white;
  border-radius: 14px;
  margin: 10px 20px;
  /* margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px; */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-width: 1px;
  border-color: #ddd;
  border-bottom-width: 0;
  elevation: 9;
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
  /* color: #b8bece; */
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
  /* flex-direction: row; */
  /* align-items: center;
  height: 80px; */
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
  /* margin-top: 4px; */
`;
const Author = styled.Text`
  color: #3c4560;
  font-size: 13px;
  font-weight: 500;
  margin-top: 4px;
`;

const Wrapper = styled.View`
  /* margin-left: 10px; */
`;
