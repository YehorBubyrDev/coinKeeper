import React from 'react';
import {View, Text, Button} from 'react-native';

interface Props {
  navigation: any;
}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Button title="Go to More" onPress={() => navigation.navigate('More')} />
    </View>
  );
};
