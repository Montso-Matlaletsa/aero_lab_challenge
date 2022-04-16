import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from './src/utils/styles';
import Home from './src/screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <View style={globalStyle.container}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
