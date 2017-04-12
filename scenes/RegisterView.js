import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableHighlight, Text, KeyboardAvoidingView, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
      autoCorrect: false,
      keyboardType: "email-address"
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
      autoCorrect: false,
      secureTextEntry: true
    },
    password_confirmation: {
      autoCapitalize: 'none',
      password: true,
      autoCorrect: false,
      secureTextEntry: true
    }
  }
}

class RegisterView extends Component {

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
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: value.email,
          first_name: value.first_name,
          last_name: value.last_name,
          password: value.password,
          password_confirmation: value.password_confirmation
      })
    })
      .then((response) => response.json())
      .then(() => {
        alert('Success! You may now log in.');
        // Redirect to home screen
        Actions.LoginView();
      })
      .catch((error) => {
        console.log(error);
        alert('Success! You may now log in.');

        Actions.LoginView();
      })
      .done()
    }else {
      // Form validation error
      alert('Bitte die markierten Felder ausfüllen');
    }
  }

  render() {
    return (
      <ScrollView>
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('./images/logo.png')}>
            <Text style={styles.title}>Dein Team - immer und überall</Text>
            </Image>
        </View>
        <Form
          ref='form'
          type={newUser}
          options={options}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight style={styles.buttonContainer} onPress={this._handleAdd}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
     </ScrollView>
    )
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
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  title: {
    marginTop: 220,
    textAlign: 'center',
    fontSize: 20,
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
    color: 'rgba(255,255,255,0.9)',
    fontSize: 20,
    fontWeight: '900'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

module.exports = RegisterView
