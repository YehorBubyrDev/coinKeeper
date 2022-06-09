import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  navigation: any;
}

export const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HOME</Text>
    </View>
  );
};
