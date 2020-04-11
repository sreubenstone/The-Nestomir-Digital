import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ProgressCardStyles, GlobalStyles } from "../../Stylesheet";
import { TOC } from "../../TOC";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  bookmark: any
}

const ProgressMap: FC<IProps> = props => {
  const { navigation, bookmark } = props;

  const upTo = bookmark.position
  // 2 in list (chapter 3), thus chapter 4 is in progress -- do we worry about
  // we need a new array, good time to
  console.log(TOC)

  return (
    <View>
      {TOC.map((item, i) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("ChapterLoader", { chapter: item.id })} key={i}>
            <View style={ProgressCardStyles.container}>
              <View style={GlobalStyles.flexRow}>
                <Image style={ProgressCardStyles.im} source={{ uri: item.image }} />
                <View style={{ marginLeft: "3.5%" }}>
                  <Text style={GlobalStyles.textCardTitle}>{item.chapter}</Text>
                  <Text style={GlobalStyles.textCardSubtitle}>{item.caption}</Text>
                  {item.progress === "in_progress" ?
                    <View style={item.progress ? ProgressCardStyles.tagContainer1 : ProgressCardStyles.tagContainer2} >
                      <Text style={{ fontSize: 9, color: "#fff", fontWeight: "600" }}>{item.progress ? "In Progress" : "Completed"} </Text>
                    </View>
                    : null}
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
