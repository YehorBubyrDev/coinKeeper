import React from 'react';
import {View, Text, Button} from 'react-native';

interface Props {
  navigation: any;
}

export const SettingsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
