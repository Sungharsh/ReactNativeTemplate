import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ImageBackground } from 'react-native';

function mapStateToProps(state) {
  return { action: state.action, name: state.name };
}
function mapDispatchToProps(dispatch) {
  return {
    updateName: (name) =>
      dispatch({
        type: 'UPDATE_NAME',
        name: name,
      }),
  };
}

class PersonalDetails extends Component {
  state = {
    backgroundImg: require('../assets/background22.jpg'),
    photo: '../assets/avatar-default.jpg',
    name: '',
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((response) => {
        for (var i = 0, l = response.results.length; i < l; i++) {
          this.setState({
            photo: response.results[i].picture.thumbnail,
            name: response.results[i].name.first,
          });

          this.props.updateName(response.results[i].name.first);
        }
      });
  }

  render() {
    return (
      <Container>
        <ImageBackground
          source={this.state.backgroundImg}
          style={{ width: '100%', height: '100%' }}
        >
          <Image source={{ uri: this.state.photo }} />
          <Cover>
            <Title>Random Profile</Title>
            <Title>{this.state.name}</Title>
            <Subtitle>View Profile</Subtitle>
          </Cover>
        </ImageBackground>
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);

const Container = styled.View`
  flex-direction: row;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #d1e3ff;
`;
const Image = styled.Image`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 80%;
  margin: 10px;

  top: 10px;
  left: 22px;
  box-shadow: 0 1.5px 0px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  height: 90%;
  width: 80%;
  position: absolute;
  top: 10px;
  left: 100px;

  padding-top: 20px;
  flex-direction: column;
  align-items: flex-start;

  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  flex: 1;
  font-size: 24px;
  color: #343434;
  font-weight: bold;
  text-align: center;
`;
const Subtitle = styled.Text`
  flex: 1;
  font-size: 18px;
  color: blueviolet;
  font-weight: 500;
`;
