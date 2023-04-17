import React, { FC } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { ProgressCardStyles, GlobalStyles } from "../Other/Stylesheet";

const LearningTenets: FC = (props) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={ProgressCardStyles.container}>
        <View style={[GlobalStyles.flexRow, { alignItems: "center" }]}>
          <Image style={ProgressCardStyles.im} source={{ uri: "https://res.cloudinary.com/dshxqbjrf/image/upload/v1649718738/zoomin_dbo4fg.png" }} />
          <View style={{ marginLeft: "4.0%" }}>
            <Text style={GlobalStyles.textCardTitle}>The Learning Tenets</Text>
            <Text style={GlobalStyles.textCardSubtitle}>Many years ago they were written.</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LearningTenets;
