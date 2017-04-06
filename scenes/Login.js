import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import { Header, Body, Title, Container, Content, Thumbnail } from 'native-base';
import LoginForm from './LoginForm';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { observer } from 'mobx-react/native';

export default class Login extends Component {

  render(){
    return (
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('./images/logo.png')}>
            <Text style={styles.title}>Dein Team - immer und überall</Text>
            </Image>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    flexGrow: 0,
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 300
  },
  container: {
    flex: 0,
  },
  title: {
    marginTop: 220,
    textAlign: 'center',
    fontSize: 20,
  }
});
