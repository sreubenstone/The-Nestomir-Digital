import React, { FC } from "react";
import { View, Text, Image } from "react-native";
import Stylesheet from "../../Stylesheet";

const MyTracks: FC = () => {
  return (
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
  );
};

export default MyTracks;
