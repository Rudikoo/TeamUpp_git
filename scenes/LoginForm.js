import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { observer } from 'mobx-react/native';

export default class LoginForm extends Component {
  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <TextInput
        placeholder="email"
        placeholderTextColor="rgba(141,41,50,0.7)"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        />
        <TextInput
        placeholder="password"
        placeholderTextColor="rgba(141,41,50,0.7)"
        returnKeyType="go"
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress = { ()=> { Actions.tabbar ()}}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.link} onPress = { ()=> { Actions.Register ()}}>Noch nicht registriert?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(77,77,77,0.2)',
    marginBottom: 10,
    color: 'rgba(141,41,50,1)',
    paddingHorizontal: 10,
    borderRadius:4,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonContainer: {
    backgroundColor: 'rgba(141,41,50,1)',
    paddingVertical: 10,
    borderRadius:4,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.9)',
    fontSize: 20,
    fontWeight: '900'
  },
  link: {
    textAlign: 'center',
    marginTop: 20,
    color: 'rgba(141,41,50,1)',
    fontSize: 20
  }
});
