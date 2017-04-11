import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Header, Body, Title, Container, Content, Thumbnail } from 'native-base';

export default class Einstellungen extends Component {

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
      <Container>
        { this.renderHeader() }
        <Content style = { styles.container }>
          <Text style = { styles.welcome }>
            Hier landen die Einstellungen
          </Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
