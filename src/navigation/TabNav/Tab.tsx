import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, SettingsStack} from '../StackNav/index';

const Tab = createBottomTabNavigator();

export const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="Settings"
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
};
