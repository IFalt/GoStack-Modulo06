import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import './config/ReactotronConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    alignItems: 'center',
  },
});

console.tron.log('Hello World');

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native</Text>
    </View>
  );
};

export default App;
