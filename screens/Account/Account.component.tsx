import React from 'react';
import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export function Account({ navigation }: NativeStackScreenProps<any, 'account'>) {
  return (
    <View style={{ flex: 1 }}>
      <Text>Account Settings</Text>
      <Button title='User Profile' onPress={() => navigation.navigate('profile')} />
      <Button title='Logout' onPress={() => navigation.navigate('login')} />
    </View>
  );
}
