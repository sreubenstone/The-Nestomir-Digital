import React, { Component } from "react";
import ProgressLoader from "./ProgressLoader";

interface IProps {
  navigation: any;
}

export default class ProgressEntry extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <ProgressLoader navigation={this.props.navigation} />;
  }
}
