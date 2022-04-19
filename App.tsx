import {StyleSheet, View} from 'react-native';
import React from 'react';
import {globalStyle} from './src/utils/styles';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
      <View style={globalStyle.container}>
        <RootStack />
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
