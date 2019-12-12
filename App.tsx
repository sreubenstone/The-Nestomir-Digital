import React, { Component } from "react";
import * as Font from "expo-font";
import Tracks from "./components/Tracks/Tracks";

export default class App extends Component<{}> {
  state = {
    fontLoaded: false
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
    const { fontLoaded } = this.state;
    return fontLoaded ? <Tracks /> : null;
  }
}
