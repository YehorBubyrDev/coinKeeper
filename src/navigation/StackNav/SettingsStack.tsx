import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsScreen} from '../../screens/index';

const SettingsNav = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <SettingsNav.Navigator>
      <SettingsNav.Screen name="Settings" component={SettingsScreen} />
    </SettingsNav.Navigator>
  );
};

export default SettingsStack;
