import React, { Component } from "react";
import { Header, Title, Button, Icon, Left, Right, Body } from 'native-base';

class HeaderBar extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
    );
  }
}

export default HeaderBar;
