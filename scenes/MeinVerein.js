import React, { Component } from 'react';
import { Header, Title, Container, Content, Left, Body, Right, ListItem, Text, Icon, Button, Input, Item } from 'native-base';
import { ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';

@observer
export default class MeinVerein extends Component {

  constructor(){
    super();
    this.state = {
      displaySearchBar: false,
      search: ""
    }
  }

  handleAdd(){
    this.props.store.add(doc);
  }

  renderHeader(){
    const {title} = this.props;
    //this.props.store.refresh();

    let header = (
      <Header>
        <Left/>
        <Body>
          <Title>{ title }</Title>
        </Body>
        <Right>
        </Right>
      </Header>
    );

    if(this.state.displaySearchBar){
      header = (
        <Header searchBar rounded>
          <Item>
            <Icon name = "search"/>
            <Input
              placeholder = "Search"
              onChangeText = { (text) => this.setState({search: text})}
              value = { this.state.search }
            />
          </Item>
          <Button transparent onPress = { () => this.handleSearch() }>
            <Text>Search</Text>
          </Button>
        </Header>
      )
    }

    return header;
  }

  renderRow(rowData){
    return (
      <ListItem onPress = { ()=> { Actions.MeinVereinCalendar ()}}>
        <Body>
          <Text>{ rowData.title }</Text>
        </Body>
        <Right>
          <Icon name = "arrow-forward" style = {{ color: "#0098ff"}}/>
        </Right>
      </ListItem>
    );
  }

  handleSearch(){

    const { search } = this.state;

    this.props.store.search(search);

    this.setState({displaySearchBar: false});
  }

  render(){
    const { dataSource } = this.props.store;
    return (
      <Container>
        { this.renderHeader() }
        <Text style = {{ textAlign:'center', marginTop: 10 }}>Bitte Sportart wählen</Text>
        <Content>
          <ListView
            dataSource = { dataSource }
            renderRow = { this.renderRow.bind(this)}
            enableEmptySections = { true }
            />
        </Content>
      </Container>
    );
  }
}
