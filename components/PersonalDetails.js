import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  console.log("PerDetailsScreenReduxState :", state);
  return { action: state.action, name: state.name };
}
function mapDispatchToProps(dispatch) {
  console.log("PerDetailsScreenReduxActions :", dispatch.props);
  return {
    updateName: (name) =>
      dispatch({
        type: "UPDATE_NAME",
        name: name,
      }),
  };
}

class PersonalDetails extends Component {
  state = {
    // photo: "https://share.getcloudapp.com/NQugKWd4.jpg",
    photo: "../assets/avatar-default.jpg",
    name: "",
  };

  componentDidMount() {
    // fetch("https://randomuser.me/api/", {
    //   headers: new Headers({
    //     "X-API-Key": "eeaaffdlnf56484er7878#ere"
    //   })
    // })
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((response) => {
        for (var i = 0, l = response.results.length; i < l; i++) {
          this.setState({
            photo: response.results[i].picture.thumbnail,
            name: response.results[i].name.first,
          });

          this.props.updateName(response.results[i].name.first);
        }
        //sending name action to redux state:
        //this.props.updateName(this.state.name);
      });
    //.catch((error) => console.error("API Error: ", error));
    // this.props.updateName(this.state.name);
    console.log("Per-DidMount", this.props);
  }
  // componentDidUpdate() {
  //   this.props.updateName(this.state.name);
  //   console.log("per-update");
  // }

  render() {
    console.log("***LAST*** PerDetailsScreen-Props", this.props);
    return (
      <Container>
        <Image source={{ uri: this.state.photo }} />
        <Cover>
          {/* <Title>{this.props.title}</Title> */}
          <Title>{this.state.name}</Title>
          <Title>randomuser.me</Title>
          <Subtitle>View Profile</Subtitle>
        </Cover>
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);

const Container = styled.View`
  flex-direction: row;
  height: 120px;
  width: 90%;
  justify-content: center;
  align-items: center;
  background-color: #d8d8d8;
  /* background-color: red; */

  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-width: 1px;
  border-color: #ddd;
  border-bottom-width: 0;
  elevation: 4;
`;
const Image = styled.Image`
  /* position: absolute; */
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 90%;
  margin: 10px;
  /* position: absolute;
  top: 5px;
  left: 10px; */
  border-radius: 10px;
`;
const Cover = styled.View`
  flex: 2;
  height: 90%;
  width: 80%;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: red; */
  /* width: 100%;
  height: 100%; */
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  flex: 1;
  /* line-height: 15px; */
  color: black;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  /* align-items: center;
  justify-content: center; */
`;
const Subtitle = styled.Text`
  flex: 1;
  font-size: 13px;
  /* color: rgba(255, 255, 255, 0.5); */
  color: black;
  /* margin-top: 8px; */
  /* align-items: center;
  justify-content: center; */
`;
