import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import NavStack from './NavigationStack.component';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeAreaViewContainer}>
        <NavStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
