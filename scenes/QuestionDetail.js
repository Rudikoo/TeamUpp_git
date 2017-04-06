import React, { Component } from 'react';
import { Header, Left, Right, Button, Body, Title, Container, Content, Text, Icon, Card, CardItem, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react/native';
import moment from 'moment';

@observer
export default class QuestionDetail extends Component {

  constructor(){
    super();
  }

  componentWillMount(){
    this.props.store.question = this.props.question;
  }

  renderHeader(){
    const { title } = this.props;
    return (
      <Header>
        <Left>
          <Button transparent onPress = { ()=> Actions.pop() }>
            <Icon name = "arrow-back" style = {{ color: "#057ce4" }}/>
          </Button>
        </Left>
        <Body>
          <Title>
            { title }
          </Title>
        </Body>
        <Right/>
      </Header>
    )
  }

  voteUp(){
    const { id, vote } = this.props.store.question;

    this.props.store.update (id, { vote: vote + 1 });
  }

  voteDown(){
    const { id, vote } = this.props.store.question;

    this.props.store.update(id, { vote: vote - 1 });
  }

  render(){
    const { title, author, description, createdAt, vote } = this.props.store.question;
    // const { vote } = this.state;
    /**
    * const title = this.props.question.title;
    * const author = this.props.question.author;
    */

    return (
      <Container>
        { this.renderHeader() }
        <Content>
          <Card>
            <CardItem bordered>
              <Left>
                <Icon name = "help-circle" />
                <Body>
                  <Text>{ title }</Text>
                  <Text note>{ author }, am { moment(createdAt).format("DD.MM.YYYY") }</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  { description }
                </Text>
              </Body>
              <Right>
                <Button transparent onPress = { () => this.voteUp() }>
                  <Icon active name = "arrow-up" />
                </Button>
                <Text>{ vote }</Text>
                <Button transparent onPress = { () => this.voteDown() }>
                  <Icon active name = "arrow-down" />
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}