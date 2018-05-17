import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { Container, Content } from "native-base";
import { List, ListItem } from "react-native-elements";
import HeaderBar from "../components/HeaderBar";

import axios from 'axios';

export default class ClubsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: []
    };
  }

  componentWillMount() {
    axios.get('http://calcio-fanta.herokuapp.com/clubs.json')
      .then(res => {
        const clubs = res.data;
        this.setState({ clubs });
      })
  }

  render() {
    return (
      <Container>
        <HeaderBar title='Clubs' navigation={this.props.navigation} />

        <Content padder>
          <View style={{width: '100%'}}>
            <List>
              <FlatList
                style={{height: '100%'}}
                data={this.state.clubs}
                renderItem={({item}) => (
                  <ListItem
                    roundAvatar
                    avatar={{ uri: item.logo }}
                    title={<Text style={{fontSize: 20, marginLeft: 25}}>{item.name}</Text>}
                    onPress={() => {
                      this.props.navigation.navigate('Club', { clubId: item.id });
                    }}
                  />
                )}
                keyExtractor={() => Math.random().toString(36).substr(2, 9)}
              />
            </List>
          </View>
        </Content>
      </Container>
    );
  }
}
