const React = require("react-native");
const { Dimensions, Platform } = React;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logo: {
    marginTop: 25,
    width: 150,
    height: 150
  },
  text: {
    marginTop: 10,
    color: "#D8D8D8",
    fontSize: 20
  },
  titles: {
    marginLeft: 35,
  },
  center: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  box: {
    flex: 4,
    height: 200,
  },
  infoBox: {
    flex: 7,
    flexDirection: 'column'
  },
  column: {
    height: '16%'
  },
  rowBox: {
    flex: 1,
    height: 200,
  },
  playersBox: {
    flex: 1
  },
  nameBox: {
    flex: 3,
    marginLeft: 15
  },
  playersColumn: {
    height: 40,
  },
  playersText: {
    fontSize: 16,
  },
  players: {
    minHeight: 600,
  },
  tabIcon: {
    paddingRight: 10,
  },
  tabText: {
    color: "#D8D8D8",
    fontSize: 16
  },
  clubs: {
    minHeight: 1000,
  },
  clubsLogo: {
    width: 40,
    height: 40
  },
  clubsColumn: {
    height: 50,
  },
  box1: {
    flex: 1,
    alignItems: 'center',
  },
  box2: {
    flex: 2,
  },
  box3: {
    flex: 1,
  },
  clubsText: {
    textAlign: 'center',
    fontSize: 18,
  }
};
