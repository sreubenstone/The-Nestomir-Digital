import React, { FC } from "react";
import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import Glossary from "../Glossary";

interface IProps {
  navigation: any;
}

const GlossaryMap: FC<IProps> = (props) => {
  return (
    <ScrollView>
      {Object.keys(Glossary).map((entry) => {
        return (
          <TouchableOpacity onPress={() => props.navigation.navigate("GlossaryDetail", { glossary_element: entry, entry_title: Glossary[entry].title })}>
            <Text style={{ marginTop: 30, fontFamily: "gelasio", fontSize: 17 }}>{Glossary[entry].title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default GlossaryMap;
