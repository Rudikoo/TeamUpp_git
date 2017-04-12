import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, TouchableHighlight, Text, KeyboardAvoidingView, View, Image, AlertIOS } from 'react-native';
import { Actions } from 'react-native-router-flux';

const t = require('tcomb-form-native')

const Form = t.form.Form

const User = t.struct({
  email: t.String,
  password:  t.String
})

const options = {
  fields: {
    email: {
      autoCapitalize: 'none',
      autoCorrect: false,
      keyboardType: "email-address"
    },
    password: {
      autoCapitalize: 'none',
      password: true,
      autoCorrect: false,
      secureTextEntry: true
    }
  }
}

var STORAGE_KEY = 'token';

class LoginView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: {
        email: '',
        password: ''
      }
    }
  }

  componentWillUnmount() {
    this.setState = {
      value: {
        email: '',
        password: null
      }
    }
  }

  _onChange = (value) => {
    this.setState({
      value
    })
  }

  async saveItem(token, selectedValue) {
    try {
      await AsyncStorage.setItem(token, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  async _onValueChange(item, selectedValue) {
      try {
        await AsyncStorage.setItem(item, selectedValue);
      } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
      }
    }

  _handleAdd = () => {
    var value = this.refs.form.getValue();
  if (value) { // if validation fails, value will be null
    fetch("http://dbserver.team-upp.com/api/authenticate", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: value.email,
        password: value.password,
      })
    })
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.error){
    //    console.log(responseData.error)
        alert('invalid_credentials')
      } else {
      this.saveItem('token', responseData.token),
    //  console.log(responseData)
      Actions.tabbar();
    }
    })
    .catch(() => {
        alert('There was an error fetching the secret info.')
      })
    .done();
  }
};

  render() {
    return (
      <ScrollView style={styles.container}>
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
          options={options}
          type={User}
          value={this.state.value}
          onChange={this._onChange}
        />
        <TouchableHighlight style={styles.buttonContainer} onPress={this._handleAdd}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <Text style={styles.link} onPress = { ()=> { Actions.RegisterView ()}}>Noch nicht registriert?</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
};

var styles = StyleSheet.create({
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
  },
  link: {
    textAlign: 'center',
    marginTop: 20,
    color: 'rgba(141,41,50,1)',
    fontSize: 20
  }
})

module.exports = LoginView
