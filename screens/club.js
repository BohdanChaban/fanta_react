import React, { Component } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { Container, Thumbnail, Content, Left, Right, Body, Button, Tabs, Tab, TabHeading, Icon } from "native-base";
import { List, ListItem, Lis } from "react-native-elements";
import HeaderBar from "../components/HeaderBar";

import axios from 'axios';

import styles from "../components/styles/club";
const headerScreenBg = require("../assets/bg-blue1.jpg");
const listScreenBg = require("../assets/grass2.jpg");
const gamesScreenBg = require("../assets/red1.jpg");

export default class ClubScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      club: {},
      players: [],
      clubData: [],
      games: []
    };
  }

  componentWillMount() {
    axios.get(`http://calcio-fanta.herokuapp.com/clubs/${this.props.navigation.state.params.clubId}.json`)
      .then(res => {
        const club = res.data.club;
        const clubData = [{title: 'Positon', value: club.position},
                           {title: 'Win', value: club.win},
                           {title: 'Draw', value: club.draw},
                           {title: 'Lose', value: club.lose},
                           {title: 'Goals diff', value: club.goals_diff},
                           {title: 'Points', value: club.points}
                         ];
        const players = res.data.players;

        this.setState({ club, players, clubData });
      })

    axios.get(`http://calcio-fanta.herokuapp.com/clubs/${this.props.navigation.state.params.clubId}/fixtures.json`)
      .then(res => {
        const games = res.data.games;

        this.setState({ games });
      })
  }

  render() {
    return (
      <Container>
        <HeaderBar title={this.state.club.name} navigation={this.props.navigation} />

        <Content>
          <ImageBackground source={headerScreenBg} style={styles.imageContainer}>
            <View style={styles.container}>
              <View style={styles.row}>
                <View style={styles.box}>
                  <Image style={styles.logo} source={{uri: this.state.club.logo}}/>
                </View>

                <View style={[styles.box, styles.infoBox]}>
                  { this.state.clubData.map((item, key)=>(
                    <View key={key} style={styles.column}>
                      <View style={styles.row}>
                        <View style={styles.rowBox}>
                          <Text style={[styles.text, styles.titles]}>{item.title}</Text>
                        </View>
                        <View style={styles.rowBox}>
                          <Text style={[styles.text, styles.center]}>{item.value}</Text>
                        </View>
                      </View>
                    </View>)
                  )}
                </View>
              </View>
            </View>
          </ImageBackground>

          <Tabs style={{ elevation: 2 }}>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="ios-people" style={styles.tabIcon} />
                  <Text style={styles.tabText}>Players</Text>
                </TabHeading>
              }
            >
              <ImageBackground source={listScreenBg} style={styles.imageContainer}>
                <View style={styles.players}>
                  <View style={styles.playersBox}>
                    { this.state.players.map((item, key)=>(
                      <View key={key} style={styles.playersColumn}>
                        <View style={styles.row}>
                          <View style={styles.nameBox}>
                            <Text style={[styles.text, styles.playersText]}>{item.name}</Text>
                          </View>
                          <View style={styles.playersBox}>
                            <Text style={[styles.text, styles.playersText]}>{item.position}</Text>
                          </View>
                          <View style={styles.playersBox}>
                            <Text style={[styles.text, styles.playersText]}>{item.init_price} $</Text>
                          </View>
                          <View style={styles.playersBox}>
                            <Text style={[styles.text, styles.playersText]}>{item.actual_price} $</Text>
                          </View>
                        </View>
                      </View>)
                    )}
                  </View>
                </View>
              </ImageBackground>
            </Tab>
            <Tab
              heading={
                <TabHeading>
                  <Icon name="md-football" style={styles.tabIcon} />
                  <Text style={styles.tabText}>Fixtures</Text>
                </TabHeading>
              }
            >
              <ImageBackground source={gamesScreenBg} style={styles.imageContainer}>
                <View style={styles.clubs}>
                  <View style={styles.playersBox}>
                    { this.state.games.map((item, key)=>(
                      <View key={key} style={styles.clubsColumn}>
                        <View style={styles.row}>
                          <View style={[styles.box, styles.box1]}>
                            <Image style={styles.clubsLogo} source={{uri: item.host_logo}}/>
                          </View>

                          <View style={[styles.box, styles.box2]}>
                            <Text style={[styles.text, styles.clubsText]}>{item.host_name}</Text>
                          </View>

                          <View style={[styles.box, styles.box3]}>
                            <Text style={[styles.text, styles.clubsText]}>{item.result}</Text>
                          </View>

                          <View style={[styles.box, styles.box2]}>
                            <Text style={[styles.text, styles.clubsText]}>{item.guest_name}</Text>
                          </View>

                          <View style={[styles.box, styles.box1]}>
                            <Image style={styles.clubsLogo} source={{uri: item.guest_logo}}/>
                          </View>
                        </View>
                      </View>)
                    )}
                  </View>
                </View>
              </ImageBackground>
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
