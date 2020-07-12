import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigatior() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'SectionScreen') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#c5daac',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="SectionScreen" component={SectionScreen} />
      <Tab.Screen name="Contact" component={HomeScreen} />
      <Tab.Screen name="About" component={HomeScreen} />
    </Tab.Navigator>
  );
}

//////////////////////////////////////////////////////////////////////////////

// import { createBottomTabNavigator } from 'react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './../screens/HomeScreen';
// import SectionScreen from './../screens/SectionScreen';

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
//   section: SectionScreen,
// });
// 2;
// const CoursesStack = createStackNavigator({
//   Courses: SectionScreen,
// });

// const ProjectStack = createStackNavigator({
//   Projects: SectionScreen,
// });
// const TabNavigator = createBottomTabNavigator({
//   HomeStack,
//   CoursesStack,
//   ProjectStack,
// });
// export default TabNavigator;

//https://reactnavigation.org/docs/tab-based-navigation
