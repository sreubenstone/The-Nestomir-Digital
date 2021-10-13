import React, { Component } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import Push from "./Push";
import ProgressMap from "./ProgressMap";
import ReaderStat from "./ReaderStat";
import { ProgressStyles } from "../../Stylesheet";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";
import ReadingBuddiesModal from "./ReadingBuddiesModal";
import styled from "styled-components";

interface IState {
  reader_modal: boolean;
}

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  data: any;
}

const FriendIcon = styled.Image`
  width: 26px;
  height: 26px;
`;

export default class ProgressContainer extends Component<IProps> {
  static navigationOptions = {
    header: null,
  };

  state = {
    reader_modal: false,
  };

  toggleReaderModal = () => this.setState({ reader_modal: !this.state.reader_modal });

  render() {
    const { navigation, data } = this.props;
    const { reader_modal } = this.state;

    return (
      <View style={{ height: "100%" }}>
        <View style={{ height: "21%" }}>
          <View style={{ position: "absolute", zIndex: 5, left: "88%", top: "27%" }}>
            <TouchableOpacity onPress={() => this.toggleReaderModal()}>
              <FriendIcon source={require("../../assets/images/lightning.png")} />
            </TouchableOpacity>
          </View>
          <ImageBackground source={require("../../assets/images/dendrojake.png")} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={ProgressStyles.container}>
          <View style={{ width: "100%" }}>
            <Text style={ProgressStyles.title}>The Nestomir</Text>
            <Text style={ProgressStyles.subTitle}>
              The epic journey
              <Text style={{ fontStyle: "italic" }}> awaits.</Text>
            </Text>
            <ProgressMap navigation={navigation} bookmark={data} />
            <ReaderStat />
          </View>
        </View>
        <Push />
        <ReadingBuddiesModal navigation={navigation} reader_modal={reader_modal} toggleReaderModal={this.toggleReaderModal} />
      </View>
    );
  }
}
