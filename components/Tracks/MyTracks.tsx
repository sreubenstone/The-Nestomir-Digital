import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Stylesheet from "../../Stylesheet";

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MyTracks: FC<IProps> = props => {
  const { navigation } = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Track")}>
      <View style={Stylesheet.flexRow}>
        <Image
          style={Stylesheet.imageCard}
          source={{
            uri: `https://thoughtcatalog.files.wordpress.com/2018/08/dragons.jpg?w=1920&h=1280&crop=1&resize=1920,1280&quality=95&strip=all`
          }}
        />
        <View style={{ marginLeft: "2.5%" }}>
          <Text style={Stylesheet.textCardTitle}>HTML For Kids</Text>
          <Text style={Stylesheet.textCardSubtitle}>
            The Adventures of Dendro & Jake
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyTracks;
