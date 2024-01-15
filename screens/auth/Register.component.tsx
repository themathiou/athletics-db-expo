import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// TODO: fix props type
export function Register({ navigation }: NativeStackScreenProps<any, 'register'>) {
  return (
    <View style={{ flex: 1 }}>
      <Text>The register screen</Text>
      <Button title='Already have account? Login.' onPress={() => navigation.navigate('login')} />
    </View>
  );
}
