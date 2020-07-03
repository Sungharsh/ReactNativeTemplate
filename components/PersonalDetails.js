import React, { Component } from "react";
import styled from "styled-components";

class My extends Component {
  state = {
    photo: "https://share.getcloudapp.com/NQugKWd4.jpg",
  };

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((response) => {
        console.log(response.picture);
        this.setState({ photo: response.Image });
      });
  }

  render() {
    return (
      <Cover>
        <Image source={{ uri: this.state.photo }} />
        <Title>Hi I am Sunghars. I am a UI Developer</Title>
        <Title>I am a UI Developer</Title>
        <Subtitle>S9 Developers</Subtitle>
      </Cover>
    );
  }
}
export default My;

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;
const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;
const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;
