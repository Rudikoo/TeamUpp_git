import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StyleSheet, TouchableHighlight, Text, KeyboardAvoidingView, View, Image, AlertIOS, TouchableOpacity, Alert } from 'react-native';
import { Header, Body, Title, Container, Content, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';

var STORAGE_KEY = 'token';

export default class Einstellungen extends Component {

  getProtectedQuote() {
  AsyncStorage.getItem('token').then((token) => {
    fetch('http://dbserver.team-upp.com/api/jokes', {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + token }
    })
    .then((response) => response.text())
    .then((quote) => {
      Alert.alert('Chuck Norris Quote', quote)
    })
    .done();
  })
}

  _handleLogOut = () => {
    AsyncStorage.removeItem('token');
    alert('You have been logged out.');
    Actions.LoginView();
  }

  renderHeader(){
    const { title } = this.props;
    return (
      <Header>
        <Body>
          <Title>
            { title }
          </Title>
        </Body>
      </Header>
    )
  }

  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
            style={styles.logo}
            source={require('./images/logo.png')}>
            <Text style={styles.title}>Dein Team - immer und überall</Text>
            </Image>
        </View>
        <TouchableHighlight style={styles.buttonContainer} onPress={this._handleLogOut}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableHighlight>
        <TouchableOpacity onPress={this.getProtectedQuote}>
          <Text> Get Chuck Norris quote! </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
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
});
