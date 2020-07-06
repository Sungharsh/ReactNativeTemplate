import React, { Component } from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MenuItem } from "./MenuItems";
import { connect } from "react-redux";

function mapStateToProps(state) {
  console.log("MenuScreenReduxState :", state);
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  console.log("MenuScreenReduxActions :", dispatch.props);
  return {
    closeMenu: () =>
      dispatch({
        type: "CLOSE_MENU",
      }),
  };
}
const screenHeight = Math.round(Dimensions.get("window").height);

class Menu extends Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  componentDidMount() {
    this.toggleMenu();
    //console.log("£Did-MOUNT :");
  }

  componentDidUpdate() {
    //console.log("£Did-UPDATE :", this.props);
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.top, {
        toValue: 54,
        useNativeDriver: false,
      }).start();
      //console.log("£METHOD-OPEN:", this.props);
      console.log("£MENU-OPEN :", this.props.action);
    } else if (this.props.action == "closeMenu") {
      Animated.spring(this.state.top, {
        toValue: screenHeight,
        useNativeDriver: false,
      }).start();
      console.log("£MENU-CLOSE :", this.props);
    }
  };

  render() {
    console.log("MenuScreenJS-Props", this.props);

    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>Sunny</Title>
          <Subtitle>S9 Developers</Subtitle>
        </Cover>

        <TouchableOpacity
          // onPress={this.toggleMenu}
          onPress={this.props.closeMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1,
          }}
        >
          <CloseView>
            <Ionicons name="ios-close" size={32} color="green" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <MenuItem
              key={index}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  border-radius: 10px;
  overflow: hidden;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  justify-content: center;
  align-items: center;
`;
const Content = styled.View`
  height: ${screenHeight + "px"};
  background: #f0f3f5;
  padding: 50px;
`;
const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings",
  },
  {
    icon: "ios-card",
    title: "Billing",
    text: "payments",
  },
  {
    icon: "ios-compass",
    title: "Learn React",
    text: "start course",
  },
  {
    icon: "ios-exit",
    title: "Log out",
    text: "see you soon!",
  },
];
