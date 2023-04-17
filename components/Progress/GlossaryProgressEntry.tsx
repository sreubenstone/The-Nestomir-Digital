import React, { FC } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { ProgressCardStyles, GlobalStyles } from "../Other/Stylesheet";

interface IProps {
  navigation: any;
}

const GlossaryProgressEntry: FC<IProps> = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Glossary");
      }}
    >
      <View style={ProgressCardStyles.container}>
        <View style={[GlobalStyles.flexRow, { alignItems: "center" }]}>
          <Image style={ProgressCardStyles.im} source={{ uri: "https://res.cloudinary.com/dshxqbjrf/image/upload/v1635700452/happy-little-girl-holding-a-book-mockup-at-the-library-a19273-8Aw_ahttb0.png" }} />
          <View style={{ marginLeft: "4.0%" }}>
            <Text style={GlobalStyles.textCardTitle}>Glossary</Text>
            <Text style={GlobalStyles.textCardSubtitle}>See the enhanced glossary.</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GlossaryProgressEntry;
