import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ChapterCardStyles, GlobalStyles } from "../../Stylesheet";
import { chapterProgress } from "../../mockData";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MapChapters: FC<IProps> = props => {
  const { navigation } = props;
  return (
    <View>
      {chapterProgress.map((item, i) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.id)}
            key={i}
          >
            <View style={ChapterCardStyles.container}>
              <View style={GlobalStyles.flexRow}>
                <Image
                  style={ChapterCardStyles.im}
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
                        ? ChapterCardStyles.tagContainer1
                        : ChapterCardStyles.tagContainer2
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

export default MapChapters;
