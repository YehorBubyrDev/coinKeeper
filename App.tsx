import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabNav} from './src/navigation/TabNav/Tab';

const App = () => {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
};

export default App;
