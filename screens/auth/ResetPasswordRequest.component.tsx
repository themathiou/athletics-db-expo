import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, StateScreen, Text, TextField, View } from 'react-native-ui-lib';
import { styles } from './auth.styles';
import { useState } from 'react';

export function ResetPasswordRequest({ navigation }: NativeStackScreenProps<any, 'resetPassword'>) {
  const [requestSent, setRequestSent] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: { email: '' }
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // navigation.navigate('profile');
    setRequestSent(true);
  };

  const showErrorMessage = (type: string): string => {
    if (!['required', 'pattern'].includes(type)) {
      return `error: ${type}`;
    }

    const errorMessages: { [key: string]: string } = {
      required: 'Required field',
      pattern: 'Please use a valid email address'
    };

    return errorMessages[type];
  };

  const onFieldBlur = () => {
    const fieldValue = watch('email');
    setValue('email', fieldValue, { shouldValidate: true });
  };

  const onCtaPress = () => {
    setRequestSent(false);
    navigation.navigate('login');
  };

  const messageSentSuccess = () => {
    return (
      <StateScreen
        title={'We sent you an email. Follow the link in that email to reset your password'}
        subtitle={'Then go back to login with your new password'}
        ctaLabel={'Done'}
        onCtaPress={onCtaPress}
      />
    );
  };

  const requestForm = () => {
    return (
      <>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} contentFit='contain' source={require('../../assets/images/logo.svg')} />
          <Image style={styles.logoText} contentFit='contain' source={require('../../assets/images/logo_text.svg')} />
        </View>

        <Text style={styles.title}>Reset Password</Text>

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
                placeholder={'Your email address'}
                floatingPlaceholder
                floatingPlaceholderStyle={styles.floatingPlaceholder}
                style={styles.textField}
                onChangeText={onChange}
                onBlur={onFieldBlur}
                autoFocus={false}
                autoCapitalize={'none'}
                keyboardType='email-address'
                clearButtonMode='while-editing'
              />
              {errors.email && <Text style={{ color: 'red' }}>{showErrorMessage(errors.email.type)}</Text>}
            </View>
          )}
        />

        <Button label={'Request new password'} onPress={handleSubmit(onSubmit)} size={Button.sizes.large} marginB-20 />

        <Button label={'Go back to login'} onPress={() => navigation.navigate('login')} hyperlink marginB-10 />
      </>
    );
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={styles.rootContainer}>{requestSent ? messageSentSuccess() : requestForm()}</View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
