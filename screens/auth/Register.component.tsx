import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, Text, TextField, View } from 'react-native-ui-lib';
import { styles } from './auth.styles';

// TODO: fix props type
export function Register({ navigation }: NativeStackScreenProps<any, 'register'>) {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: { email: '', password: '' }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('profile');
  };

  const showErrorMessage = (fieldName: 'email' | 'password', type: string) => {
    const generalErrorMessage = 'Please check the inputs';
    if (!['email', 'password'].includes(fieldName)) {
      return generalErrorMessage;
    }

    const errorMessages: { [key: string]: { [key: string]: string } } = {
      email: {
        required: 'Required field',
        pattern: 'Please use a valid email address'
      },
      password: {
        required: 'Required field',
        minLength: 'Should be longer than 8 characters'
      }
    };

    return errorMessages[fieldName][type] || generalErrorMessage;
  };

  const onFieldBlur = (fieldName: 'email' | 'password') => {
    const fieldValue = watch(fieldName);
    setValue(fieldName, fieldValue, { shouldValidate: true });
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={styles.rootContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} contentFit='contain' source={require('../../assets/images/logo.svg')} />
            <Image style={styles.logoText} contentFit='contain' source={require('../../assets/images/logo_text.svg')} />
          </View>

          <Text style={styles.title}>Create Account</Text>

          <Controller
            name='email'
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            }}
            render={({ field: { onChange, value } }) => (
              <View style={{ marginBottom: 20 }}>
                <TextField
                  value={value}
                  placeholder={'E-mail'}
                  floatingPlaceholder
                  floatingPlaceholderStyle={styles.floatingPlaceholder}
                  style={styles.textField}
                  onChangeText={onChange}
                  onBlur={() => onFieldBlur('email')}
                  autoFocus={false}
                  autoCapitalize={'none'}
                  keyboardType='email-address'
                  clearButtonMode='while-editing'
                />
                {errors.email && <Text style={{ color: 'red' }}>{showErrorMessage('email', errors.email.type)}</Text>}
              </View>
            )}
          />

          <Controller
            name='password'
            control={control}
            rules={{
              maxLength: 100,
              minLength: 8,
              required: true
            }}
            render={({ field: { onChange, value } }) => (
              <View style={{ marginBottom: 20 }}>
                <TextField
                  value={value}
                  placeholder={'Password'}
                  floatingPlaceholder
                  floatingPlaceholderStyle={styles.floatingPlaceholder}
                  style={styles.textField}
                  secureTextEntry
                  onChangeText={onChange}
                  onBlur={() => onFieldBlur('password')}
                  clearButtonMode='while-editing'
                />
                {errors.password && (
                  <Text style={{ color: 'red' }}>{showErrorMessage('password', errors.password.type)}</Text>
                )}
              </View>
            )}
          />

          <Button label={'Create Account'} onPress={handleSubmit(onSubmit)} size={Button.sizes.large} marginB-20 />

          <Button
            label={'Have an account already? Login'}
            onPress={() => navigation.navigate('login')}
            hyperlink
            marginB-10
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
