import React from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export function UserProfile({ navigation }: NativeStackScreenProps<any, 'profile'>) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Theodoros Mathioudakis</Text>
      <Text>High jumper</Text>
      <Button title='Account Settings' onPress={() => navigation.navigate('account')} />
    </View>
  );
}
