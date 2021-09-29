import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarOptions,
  MaterialTopTabNavigationOptions,
} from '@react-navigation/material-top-tabs';
import React from 'react';
// import {useSelector} from '../reducers';
// import Direct from '../screens/Others/Direct';
// import StoryTaker from '../screens/Others/StoryTaker';
import AuthStack, {AuthStackParamList} from './AuthStack';
// import HomeTab, {HomeTabParamList} from './HomeTab';
export type rootStackParamList = {
  AuthStack: undefined;
  HomeTab: undefined;
  StoryTaker: undefined;
  Direct: undefined;
};

const RootTab = createMaterialTopTabNavigator<rootStackParamList>();
const index = (): JSX.Element => {
  //   const user = useSelector(state => state.user);
  const navigationOptions: MaterialTopTabNavigationOptions = {};
  const tabBarOptions: MaterialTopTabBarOptions = {
    indicatorContainerStyle: {
      display: 'none',
    },
    tabStyle: {
      display: 'none',
    },
  };
  //   const logined = !!user?.user?.userInfo;
  return (
    <RootTab.Navigator
      initialRouteName={'AuthStack'}
      screenOptions={navigationOptions}
      tabBarOptions={tabBarOptions}>
      <RootTab.Screen name="AuthStack" component={AuthStack} />
      {/* {logined && (
        <>
          <RootTab.Screen name="StoryTaker" component={StoryTaker} />
          <RootTab.Screen name="HomeTab" component={HomeTab} />
          <RootTab.Screen name="Direct" component={Direct} />
        </>
      )} */}
    </RootTab.Navigator>
  );
};
export default index;
