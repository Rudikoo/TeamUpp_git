/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions, Scene, Router, Switch, Modal } from 'react-native-router-flux';
import { Icon } from 'native-base';
import Einstellungen from './scenes/Einstellungen';
import TeamUpp from './scenes/TeamUpp';
import MeinVerein from './scenes/MeinVerein';
import QuestionDetail from './scenes/QuestionDetail';
import QuestionAdd from './scenes/QuestionAdd';
import MeinVereinCalendar from './scenes/MeinVereinCalendar';
import RegisterView from './scenes/RegisterView';
import LoginView from './scenes/LoginView';



import { QuestionStore } from './stores';
import { SportsStore } from './stores';


class TabIcon extends Component {
  render(){
    const title = this.props.title;
    let icon = "";
    if(title == "TeamUpp"){
      icon = "home";
    }else if(title == "Einstellungen"){
      icon = "settings";
    }else if(title == "Mein Verein"){
      icon = "contacts";
    }
    return (
      <Icon name = { icon } style = {{ color: this.props.selected ? '#057ce4' :'#afafa4' }}/>
    );
  }
}

class Main extends Component {
  componentWillMount(){
    this.scenes = Actions.create(
      <Scene key = "root" tabs = { true }>
        <Scene key = "menus">
          <Scene key = "LoginView" component = { LoginView } title = "LoginView" hideNavBar = { true }/>
          <Scene key = "RegisterView" component = { RegisterView } title = "RegisterView" hideNavBar = { true }/>
          <Scene key = "tabbar" tabs = { true } tabBarStyle = {{ backgroundColor:'#f7f7f7' }}>
            <Scene key = "TeamUpp" store = { QuestionStore } component = { TeamUpp } title = "TeamUpp" icon = { TabIcon } hideNavBar = { true }/>
            <Scene key = "MeinVerein" store = { QuestionStore } component = { MeinVerein } title = "Mein Verein" icon = { TabIcon } hideNavBar = { true }/>
            <Scene key = "Einstellungen" component = { Einstellungen } title = "Einstellungen" icon = { TabIcon } hideNavBar = { true }/>
          </Scene>
          <Scene key = "QuestionDetail" store = { QuestionStore } component = { QuestionDetail } title = "Question Detail" hideNavBar = { true }/>
          <Scene key = "QuestionAdd" store = { QuestionStore } component = { QuestionAdd } title = "Question Add" hideNavBar = { true }/>
          <Scene key = "MeinVereinCalendar" store = { QuestionStore } component = { MeinVereinCalendar } title = "Kalender" hideNavBar = { true }/>
        </Scene>
      </Scene>
    );
  }

  render() {
    return <Router scenes = { this.scenes }/>
  }
}

module.exports = Main;
