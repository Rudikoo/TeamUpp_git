import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Header, Body, Title, Container, Content, Left, Right, Button, Icon } from 'native-base';
import Calendar from 'react-native-calendar';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

const customDayHeadings = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
const customMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mai',
  'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f7f7f7',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class MeinVereinCalendar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment().format(),
    };
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

  render() {
    return (
      <Container>
      { this.renderHeader() }
      <Text style = {{ textAlign:'center', marginTop: 10 }}>Wann möchten sie spielen?</Text>
        <View style={styles.container}>
          <Calendar
            ref="calendar"
            scrollEnabled
            showControls
            dayHeadings={customDayHeadings}
            monthNames={customMonthNames}
            titleFormat={'MMMM YYYY'}
            prevButtonText={'Prev'}
            nextButtonText={'Next'}
            onDateSelect={(date) => this.setState({ selectedDate: date })}
            onTouchPrev={(e) => console.log('onTouchPrev: ', e)}
            onTouchNext={(e) => console.log('onTouchNext: ', e)}
            onSwipePrev={(e) => console.log('onSwipePrev: ', e)}
            onSwipeNext={(e) => console.log('onSwipeNext', e)}
          />
          <Text>Selected Date: {moment(this.state.selectedDate).format('MMMM DD YYYY')}</Text>
        </View>
      </Container>

    );
  }
}
