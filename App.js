/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  ToastAndroid
} from 'react-native';
import firebase from 'react-native-firebase';

export default class App extends Component {
  state = {
    loginStatus: 'Menunggu authentikasi'
  }

  async componentDidMount() {
    try {
      var result = await firebase.auth().signInWithEmailAndPassword('udin123@gmail.com', '123456');
      this.setState({
        loginStatus: 'Berhasil'
      });
    } catch(e) {
      ToastAndroid.show(e.toString(), ToastAndroid.SHORT);
      this.setState({
        loginStatus: 'Gagal'
      });
    }
  }

  render() {
    return (
      <Text>{this.state.loginStatus}</Text>
    );
  }
}
