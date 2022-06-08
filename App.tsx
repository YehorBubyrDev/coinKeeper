import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// MY SCREENS
import {HomeScreen, MoreScreen, SettingsScreen} from './src/screens/index';

const Tab = createBottomTabNavigator();
const HomeNav = createNativeStackNavigator();
const SettingsNav = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeNav.Navigator>
      <HomeNav.Screen name="Home" component={HomeScreen} />
      <HomeNav.Screen name="Settings" component={SettingsScreen} />
      <HomeNav.Screen name="More" component={MoreScreen} />
    </HomeNav.Navigator>
  );
};

const SettingsStack = () => {
  return (
    <SettingsNav.Navigator>
      <SettingsNav.Screen name="Settings" component={SettingsScreen} />
    </SettingsNav.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default App;
