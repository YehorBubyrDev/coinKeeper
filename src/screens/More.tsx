import React from 'react';
import {View, Text, Button} from 'react-native';

interface Props {
  navigation: any;
}

export const MoreScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>More</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
