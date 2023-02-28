import React, { FC, useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_PROFILE } from "../Other/queries";
import { Dimensions } from "react-native";

interface IProps {
  tagline: string;
  is_me: boolean;
}

const Tagline: FC<IProps> = ({ tagline, is_me }) => {
  const windowWidth = Dimensions.get("window").width;
  const [saveProfile, { loading: mutationLoading, error: mutationError }] = useMutation(SAVE_PROFILE);
  const [value, onChangeText] = useState(tagline);
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View style={{ width: windowWidth > 800 ? "75%" : "100%" }}>
        {is_me && <Text style={{ color: "grey", fontSize: 10, fontWeight: "bold", marginTop: 15 }}>Short Summary</Text>}
        <TextInput
          value={value}
          onChangeText={(text) => onChangeText(text)}
          multiline
          maxLength={250}
          editable={is_me}
          placeholder={is_me ? "...my summary goes here" : "I'm new here."}
          style={{ height: 45, borderColor: "grey", borderRadius: 3, padding: 7, borderWidth: 0, backgroundColor: is_me ? "#F7F7F7" : null, marginTop: 15, textAlignVertical: "top", textAlign: is_me ? "left" : "center" }}
        />
        {is_me && (
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 10, color: "grey", marginTop: 5, marginRight: 20 }}>{value ? value.length : "0"}/250</Text>
            <TouchableOpacity
              onPress={() => {
                if (value == null || !value.length) {
                  return;
                }
                saveProfile({ variables: { tagline: value } });
              }}
            >
              <Text style={{ fontSize: 10, color: "#0195FF", marginTop: 5 }}>{!mutationLoading ? "Save" : "SAVING"}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Tagline;
