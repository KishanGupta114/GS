/**
 * @format
 * @flow strict-local
 */

 
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


class App extends Component {
  render() {
    return (
      <Text>Urban Needs</Text>
    );
  }
}

const styles = StyleSheet.create({
  View : {
    flex: 1,
        justifyContent: "center",
        alignItems: "center"
  },
});

export default App;

