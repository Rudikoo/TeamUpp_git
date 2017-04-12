import React, {Component} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

class ProtectedView extends Component {

  getProtectedQuote() {
    Alert.alert('We will print a Chuck Norris quote')
}

  userLogout() {
    Actions.Authentication();
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.getProtectedQuote}>
          <Text> Get Chuck Norris quote! </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.userLogout}>
          <Text> Log out </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
