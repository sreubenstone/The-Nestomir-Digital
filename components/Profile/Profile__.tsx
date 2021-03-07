import React, { Component } from "react";
import ProfileLoader from "./ProfileLoader";

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class Profile extends Component<IProps> {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    const user_id = navigation.getParam('user_id')
    return (
      <ProfileLoader navigation={navigation} user_id={user_id} />
    );
  }
}
