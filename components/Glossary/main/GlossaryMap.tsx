import React, { FC } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import Glossary from "../Glossary";

import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const GlossaryMap: FC<IProps> = (props) => {
  return (
    <ScrollView>
      {Object.keys(Glossary).map((entry) => {
        return (
          <TouchableOpacity onPress={() => props.navigation.navigate("GlossaryDetail", { glossary_element: entry })}>
            <Text style={{ marginTop: 30, fontFamily: "gelasio", fontSize: 17 }}>{Glossary[entry].title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default GlossaryMap;