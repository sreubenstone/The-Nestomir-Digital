import React, { Component } from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import NotificationButtonForum from "./NotificationButtonForum";
import ForumLoader from "./ForumLoader";
import NotificationModal from "../Notifications/NotificationModal";
import { ProgressStyles } from "../Other/Stylesheet";

interface IProps {
  navigation: any;
}

interface IState {
  notif_modal: boolean;
}

export default class Forum extends Component<IProps, IState> {
  static navigationOptions = {
    header: null,
  };

  state = {
    notif_modal: false,
  };

  toggleNotifModal = () => this.setState({ notif_modal: !this.state.notif_modal });

  render() {
    const { navigation } = this.props;
    const { notif_modal } = this.state;
    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <View style={{ position: "absolute", zIndex: 5, left: "83%", top: "30%" }}>
            <NotificationButtonForum toggleNotifModal={this.toggleNotifModal} />
          </View>
          <ImageBackground source={require("../../assets/images/zena.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <View style={{ width: "100%" }}>
            <Text style={ProgressStyles.title}>Forum</Text>
            <Text style={ProgressStyles.subTitle}>Discuss thoughts and ideas.</Text>
            <View style={{ marginTop: 15 }} />
            <ScrollView>
              <ForumLoader navigation={navigation} />
            </ScrollView>
          </View>
        </View>
        <NotificationModal navigation={navigation} notif_modal={notif_modal} toggleNotifModal={this.toggleNotifModal} />
      </View>
    );
  }
}
