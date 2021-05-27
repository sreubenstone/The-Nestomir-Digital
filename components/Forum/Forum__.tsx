import React, { Component } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import ProfileButtonForum from "./ProfileButtonForum";
import ProfileModal from "./ProfileModal";
import NotificationButtonForum from "./NotificationButtonForum";
import ForumLoader from "./ForumLoader";
import NotificationModal from "../Notifications/NotificationModal";
import { ProgressStyles } from "../../Stylesheet";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
  notif_modal: boolean;
  profile_modal: boolean;
}

export default class Forum extends Component<IProps, IState> {
  static navigationOptions = {
    header: null,
  };

  state = {
    notif_modal: false,
    profile_modal: false,
  };

  toggleNotifModal = () => this.setState({ notif_modal: !this.state.notif_modal });
  toggleProfileModal = () => this.setState({ profile_modal: !this.state.profile_modal });

  render() {
    const { navigation } = this.props;
    const { notif_modal, profile_modal } = this.state;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <View style={{ position: "absolute", zIndex: 5, left: "79%", top: "25%" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <NotificationButtonForum toggleNotifModal={this.toggleNotifModal} />
              <ProfileButtonForum navigation={navigation} toggleProfileModal={this.toggleProfileModal} />
            </View>
          </View>
          <ImageBackground source={require("../../assets/images/code.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <View style={{ width: "100%" }}>
            <Text style={ProgressStyles.title}>Forum</Text>
            <Text style={ProgressStyles.subTitle}>Discuss thoughts and ideas.</Text>
            <View style={{ marginTop: 15 }} />
            <ForumLoader navigation={navigation} />
          </View>
        </View>
        <ProfileModal navigation={navigation} profile_modal={profile_modal} toggleProfileModal={this.toggleProfileModal} />
        <NotificationModal navigation={navigation} notif_modal={notif_modal} toggleNotifModal={this.toggleNotifModal} />
      </View>
    );
  }
}
