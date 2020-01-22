import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from "react-native";
import LoggedOut from './src/screens/LoggedOut'

class App extends Component {

  render() {
    return (
      <LoggedOut />
    );
  }
}

export default App;