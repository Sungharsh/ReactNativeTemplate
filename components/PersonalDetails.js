import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { ImageBackground, Dimensions } from 'react-native';

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

const screenWidth = Dimensions.get('window').width;
let heroFont;
let paddingLeft;
if (screenWidth < 500) {
  heroFont = '18px';
  paddingLeft = '10px';
}
if (screenWidth > 500) {
  heroFont = '30px';
  paddingLeft = '150px';
}

class PersonalDetails extends Component {
  state = {
    backgroundImg: require('../assets/background11.jpg'),
    photo: '../assets/avatar-default.jpg',
    name: '',
  };

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((response) => {
        for (var i = 0, l = response.results.length; i < l; i++) {
          this.setState({
            photo: response.results[i].picture.large,
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
          source={this.props.image}
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
  margin-bottom: 15px;
  background-color: #cfe0c3;
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
  font-size: ${heroFont};
  color: #343434;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: -1px -1px 0px yellow;
  font-weight: bold;
  text-align: center;
  padding-left: ${paddingLeft};
`;
const Subtitle = styled.Text`
  flex: 1;
  font-size: 18px;
  color: blueviolet;
  font-weight: 500;
  padding-left: ${paddingLeft};
`;
