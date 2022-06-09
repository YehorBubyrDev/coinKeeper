import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, SettingsScreen, MoreScreen} from '../../screens/index';

const HomeNav = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeNav.Navigator>
      <HomeNav.Screen name="Home" component={HomeScreen} />
      <HomeNav.Screen name="Settings" component={SettingsScreen} />
      <HomeNav.Screen name="More" component={MoreScreen} />
    </HomeNav.Navigator>
  );
};

export default HomeStack;
