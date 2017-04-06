import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { observer } from 'mobx-react/native';

export default class RegisterForm extends Component {
  render() {
    return (
      <View behavior="padding" style={styles.container}>
        <TextInput
        placeholder="email"
        placeholderTextColor="rgba(141,41,50,0.7)"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        />
        <TextInput
        placeholder="Vorname"
        placeholderTextColor="rgba(141,41,50,0.7)"
        returnKeyType="next"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        />
        <TextInput
        placeholder="Nachname"
        placeholderTextColor="rgba(141,41,50,0.7)"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        />
        <TextInput
        placeholder="Passwort"
        placeholderTextColor="rgba(141,41,50,0.7)"
        returnKeyType="go"
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}
        />
        <TextInput
        placeholder="Passwort bestätigen"
        placeholderTextColor="rgba(141,41,50,0.7)"
        returnKeyType="go"
        secureTextEntry
        style={styles.input}
        ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress = { ()=> { Actions.tabbar ()}}>
          <Text style={styles.buttonText}>Registrieren</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(77,77,77,0.2)',
    marginBottom: 5,
    color: 'rgba(141,41,50,1)',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: 'rgba(141,41,50,1)',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.9)',
    fontSize: 20,
    fontWeight: '900'
  }
});
