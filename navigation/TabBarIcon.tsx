import React, { Component } from "react";
import * as Icon from "@expo/vector-icons";
import Colors from "../Globals";

type MyProps = {
  name: string;
  focused: boolean;
};

export default class TabBarIcon extends Component<MyProps, {}> {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    );
  }
}
