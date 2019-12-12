import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import Stylesheet from "../../Stylesheet";
import MyTracks from "./MyTracks";

const Track: FC = () => {
  return (
    <View style={Stylesheet.container1}>
      <Text style={Stylesheet.textHeader}>My Tracks</Text>
      <MyTracks />
    </View>
  );
};

export default Track;
