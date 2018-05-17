import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Dimensions, Platform } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SideBar from "./screens/sidebar";

import HomeScreen from "./screens/home";
import ClubsScreen from "./screens/clubs";
import ClubScreen from "./screens/club";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },

    Clubs: { screen: ClubsScreen }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },

    Club: { screen: ClubScreen }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape',
      loading: true
    };

    Dimensions.addEventListener('change', () => {
        this.setState({
            orientation: isPortrait() ? 'portrait' : 'landscape'
        });
    });
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return <AppNavigator />;
  }
}
