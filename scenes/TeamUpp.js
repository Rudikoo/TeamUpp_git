import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  ListView
} from 'react-native';
import { Header, Body, Title, Container, Content, Thumbnail, ListItem, Right, Icon, List, Left } from 'native-base';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { observer } from 'mobx-react/native';

export default class TeamUpp extends Component {

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
          <List>
            <ListItem>
              <Left>
                <Text>Veranstaltungen</Text>
              </Left>
              <Right>
                <Icon name = "arrow-forward" style = {{ color: "#0098ff"}}/>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Gebuchte Events</Text>
              </Left>
              <Right>
                <Icon name = "arrow-forward" style = {{ color: "#0098ff"}}/>
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={styles.addEvent}>Event erstellen</Text>
                <Icon name = "add-circle" style = {{textAlign: 'center', color: "green"}}/>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Deine Statistiken</Text>
                <Image
                style={styles.logo}
                source={require('./images/logo.png')}>
                <Text style={styles.title}>Dein Team - immer und überall</Text>
                </Image>
              </Body>
            </ListItem>
          </List>
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
    width: 200,
    height: 150
  },
  container: {
    flex: 0,
  },
  formContainer: {
    marginTop: 10
  },
  title: {
    marginTop: 110,
    textAlign: 'center',
    fontSize: 10,
  },
  addEvent: {
    textAlign: 'center'
  }
});
