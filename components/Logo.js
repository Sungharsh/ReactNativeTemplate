import React from "react";
import styled from "styled-components";

export const Logo = (props) => {
  return (
    <Container>
      <Image source={props.image} resizeMode="contain" />
      <Text>{props.text}</Text>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  margin: 5px 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  border-width: 1px;
  border-color: #ddd;
  border-bottom-width: 0;
  elevation: 4;
`;
const Image = styled.Image`
  width: 36px;
  height: 36px;
`;
const Text = styled.Text`
  font-weight: 600;
  font-size: 17px;
  margin-left: 8px;
`;
