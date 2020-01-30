import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from "react-native";
import LoggedOut from './src/screens/LoggedOut';
import LogIn from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';

class App extends Component {

  render() {
    return (
      <ForgotPassword />
    );
  }
}

export default App;