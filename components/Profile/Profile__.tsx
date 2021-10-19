import React, { Component } from "react";
import ProfileLoader from "./ProfileLoader";

interface IProps {
  navigation: any;
  route: any;
}

export default class Profile extends Component<IProps> {
  render() {
    const { route, navigation } = this.props;
    const { user_id } = route.params;
    return <ProfileLoader navigation={navigation} user_id={user_id} />;
  }
}
