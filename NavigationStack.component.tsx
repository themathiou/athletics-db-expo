import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProfile } from './screens/UserProfile/UserProfile.component';
import { Login } from './screens/auth/Login.component';
import { Register } from './screens/auth/Register.component';
import { ResetPasswordRequest } from './screens/auth/ResetPasswordRequest.component';
import { Account } from './screens/Account/Account.component';

const NavStack = () => {
  const NativeStack = createNativeStackNavigator();

  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name='login' component={Login} options={{ headerShown: false }} />
      <NativeStack.Screen name='register' component={Register} options={{ headerShown: false }} />
      <NativeStack.Screen name='resetPassword' component={ResetPasswordRequest} options={{ headerShown: false }} />

      <NativeStack.Screen name='profile' component={UserProfile} />
      <NativeStack.Screen name='account' component={Account} />
    </NativeStack.Navigator>
  );
};

export default NavStack;
