import React, { Component } from "react";
import * as Font from "expo-font";
import Navigator from "./navigation/MainTabNavigator";
import Login from "./components/Login/Login";
export default class App extends Component<{}> {
  state = {
    fontLoaded: false,
    auth: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "gelasio-bold": require("./assets/fonts/Gelasio-Bold.ttf"),
      "gelasio-med": require("./assets/fonts/Gelasio-Medium.ttf"),
      gelasio: require("./assets/fonts/Gelasio-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded, auth } = this.state;
    return fontLoaded ? auth ? <Navigator /> : <Login /> : null;
  }
}
