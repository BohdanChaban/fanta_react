import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "../components/styles/home";

const launchscreenBg = require("../assets/bg-blue1.jpg");
const launchscreenLogo = require("../assets/serie-A-logo1.png");

export default class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>Fanta Calcio!</H3>
            <View style={{ marginTop: 0 }} />
          </View>
          <View style={{ marginBottom: 100 }}>
            <Button
              style={{ backgroundColor: "#1ea44b", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("Clubs")}
            >
              <Text>Lets Go!</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}
