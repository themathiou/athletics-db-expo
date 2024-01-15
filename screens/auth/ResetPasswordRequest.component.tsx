import { View, Text, Button } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

// TODO: fix props type
export function ResetPasswordRequest({ navigation }: NativeStackScreenProps<any, 'resetPassword'>) {
  return (
    <View style={{ flex: 1 }}>
      <Text>The reset password screen</Text>
    </View>
  );
}
