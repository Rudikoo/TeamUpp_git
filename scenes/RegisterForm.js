import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView, ScrollView, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { observer } from 'mobx-react/native';

const t = require('tcomb-form-native');

const Form = t.form.Form

const newUser = t.struct({
  email: t.String,
  first_name: t.String,
  last_name: t.String,
  password:  t.String,
  password_confirmation: t.String
})

const options = {
  fields: {
    email: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    first_name: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    last_name: {
      autoCapitalize: 'none',
      autoCorrect: false
    },
    password: {
      autoCapitalize: 'none',
      password: true,
      autoCorrect: false
    },
    password_confirmation: {
      autoCapitalize: 'none',
      password: true,
      autoCorrect: false
    }
  }
}

export default class RegisterForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: ''
      }
    }
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        email: '',
        first_name: '',
        last_name: '',
        password: null,
        password_confirmation: null
      }
    }
  }

  _onChange = (value) => {
    this.setState({
      value
    })
  }

  _handleAdd = () => {
    const value = this.refs.form.getValue();
    // If the form is valid...
    if (value) {
      const data = {
        email: value.email,
        first_name: value.first_name,
        last_name: value.last_name,
        password: value.password,
        password_confirmation: value.password_confirmation
      }
      // Serialize and post the data
      const json = JSON.stringify(data);
      fetch('http://dbserver.team-upp.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json
      })
      .then((response) => response.json())
      .then(() => {
        alert('Success! You may now log in.');
        // Redirect to home screen
        Actions.tabbar();
      })
      .catch((error) => {
        console.log(error);
        Actions.tabbar();
      })
      .done()
    } else {
      // Form validation error
      alert('Bitte die markierten Felder ausfüllen');
    }
  }

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
    color: 'rgba(255,255,255,0.9)',
    fontSize: 20,
    fontWeight: '900'
  }
});
