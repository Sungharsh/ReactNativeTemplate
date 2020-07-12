import 'react-native-gesture-handler';
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
// import { RootStackScreen } from './navigator/RootStackScreen';
import TabNavigatior from './navigator/TabNavigator';

const initialState = {
  action: '',
  name: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { action: 'openMenu' };
    case 'CLOSE_MENU':
      return { action: 'closeMenu' };
    case 'UPDATE_NAME':
      return { name: action.name };
    default:
      return state;
  }

  // if (action.type == "CLOSE_MENU") {
  //   return { action: "closeMenu" };
  // }
  // return state;
};
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <RootStackScreen /> */}
        <TabNavigatior />
      </NavigationContainer>
    </Provider>
  );
}
