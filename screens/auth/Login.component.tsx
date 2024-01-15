import { View, StyleSheet, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// TODO: fix props type
export function Login({ navigation }: NativeStackScreenProps<any, 'login'>) {
  return (
    <View style={styles.container}>
      <Text>The login screen</Text>
      <Button title='New here? Create account!' onPress={() => navigation.navigate('register')} />
      <Button title='Forgot Password? Reset here!' onPress={() => navigation.navigate('resetPassword')} />

      <Button title='Login' onPress={() => navigation.navigate('profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
