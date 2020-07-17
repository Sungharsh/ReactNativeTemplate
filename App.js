import 'react-native-gesture-handler';
import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigatior from './navigator/TabNavigator';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/khr85tgwpouk',
  credentials: 'same-origin',
  headers: {
    authorization: `Bearer UFE824BzelALu1n3q0Ks56gt1_PSqoiPtjSXhh-Xn6U`,
  },
});

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
};
const store = createStore(reducer);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigatior />
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}
