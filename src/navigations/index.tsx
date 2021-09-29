import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';
import RootTab from './RootTab';
import {navigationRef} from './rootNavigation';

export type SuperRootStackParamList = {
  RootTab: undefined;
};
const RootStack = createStackNavigator<SuperRootStackParamList>();
const index = (): JSX.Element => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: false,
    cardStyle: {},
  };
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        initialRouteName="RootTab"
        screenOptions={navigationOptions}>
        <RootStack.Screen name="RootTab" component={RootTab} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
export default index;
