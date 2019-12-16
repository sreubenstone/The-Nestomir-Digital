import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ProgressCardStyles, GlobalStyles } from "../../Stylesheet";
import { chapterProgress } from "../../mockData";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ProgressMap: FC<IProps> = props => {
  const { navigation } = props;
  return (
    <View>
      {chapterProgress.map((item, i) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.id)}
            key={i}
          >
            <View style={ProgressCardStyles.container}>
              <View style={GlobalStyles.flexRow}>
                <Image
                  style={ProgressCardStyles.im}
                  source={{ uri: item.image }}
                />
                <View style={{ marginLeft: "3.5%" }}>
                  <Text style={GlobalStyles.textCardTitle}>{item.chapter}</Text>
                  <Text style={GlobalStyles.textCardSubtitle}>
                    {item.caption}
                  </Text>

                  <View
                    style={
                      item.progress
                        ? ProgressCardStyles.tagContainer1
                        : ProgressCardStyles.tagContainer2
                    }
                  >
                    <Text
                      style={{ fontSize: 9, color: "#fff", fontWeight: "600" }}
                    >
                      {item.progress ? "In Progress" : "Completed"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ProgressMap;
