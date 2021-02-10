import React, { FC } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
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

  function mod(num, pos) {
    const newArray = TOC.map((item, index) => {
      if (index === num) {
        let new_entry = Object.assign({}, item);
        new_entry.progress = "in_progress"
        new_entry.bookmark = pos
        return new_entry
      }
      if (index < num) {
        let new_entry = Object.assign({}, item);
        new_entry.progress = "completed"
        return new_entry
      }

      return item

    })
    return newArray
  }

  const Prog = mod(bookmark.chapter, bookmark.position)


  return (
    <ScrollView>
      {Prog.map((item, i) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("ChapterLoader", { chapter: item.id, bookmark: item.bookmark, chapter_index: i })} key={i}>
            <View style={ProgressCardStyles.container}>
              <View style={GlobalStyles.flexRow}>
                <Image style={ProgressCardStyles.im} source={{ uri: item.image }} />
                <View style={{ marginLeft: "3.5%" }}>
                  <Text style={GlobalStyles.textCardTitle}>{item.chapter}</Text>
                  <Text style={GlobalStyles.textCardSubtitle}>{item.caption}</Text>
                  {item.progress ?
                    <View style={item.progress == 'in_progress' ? ProgressCardStyles.tagContainer1 : ProgressCardStyles.tagContainer2} >
                      <Text style={{ fontSize: 9, color: "#fff", fontWeight: "600" }}>{item.progress == 'in_progress' ? "In Progress" : "Completed"} </Text>
                    </View>
                    : null}
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default ProgressMap;
