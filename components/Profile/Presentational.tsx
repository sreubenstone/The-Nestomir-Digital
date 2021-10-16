import React, { FC } from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_AUTH } from "../../queries";
import { Text, View, ImageBackground, ScrollView, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from "react-native";
import { ProgressStyles, GlobalStyles } from "../../Stylesheet";
import PostListing from "../Forum/UI/PostListing";
import Tagline from "./Tagline";
import ProfileAvatar from "./Profile_Avatar";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  data: any;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Presentational: FC<IProps> = (props) => {
  const auth_info = useQuery(GET_AUTH, { fetchPolicy: "cache-only" });
  let is_me = false;
  if (props.data.id === auth_info.data.getAuth.id) {
    is_me = true;
  }

  return (
    <KeyboardAvoidingView style={{ height: "100%" }}>
      <View style={{ height: "21%" }}>
        <ImageBackground source={require("../../assets/images/dendrojake_2.png")} style={{ width: "100%", height: "100%" }} />
      </View>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={ProgressStyles.container}>
          <View style={{ width: "100%" }}>
            <ProfileAvatar uri={props.data.user_avatar} is_me={is_me} />
            <Text style={{ textAlign: "center", marginTop: 55, fontWeight: "800", fontSize: 19 }}>{props.data.username}</Text>
            <Tagline tagline={props.data.tagline} is_me={is_me} />
            <View
              style={[
                GlobalStyles.flexRowSpace,
                {
                  backgroundColor: "#fff",
                  marginTop: 20,
                  height: 70,
                  borderRadius: 13,
                  padding: 10,
                  shadowOffset: { width: 5, height: 10 },
                  shadowColor: "#F7F8FA",
                  shadowOpacity: 1,
                },
              ]}
            >
              <View>
                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16, marginBottom: 3 }}>{!props.data.bookmark.chapter ? "Prologue" : props.data.bookmark.chapter}</Text>
                <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "100" }}>Current Chapter</Text>
              </View>
              <View>
                <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16, marginBottom: 3 }}>{props.data.threads ? props.data.threads.length : 0}</Text>
                <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "100" }}>Forum Activity</Text>
              </View>
            </View>
            <Text style={{ marginTop: 20, fontWeight: "800", fontSize: 17, marginBottom: 15 }}>Forum Activity</Text>
            <ScrollView style={{ maxHeight: "40%" }}>
              {!props.data.threads ? (
                <Text style={{ color: "grey", fontSize: 10 }}>Forum threads {props.data.username} commented in will appear here.</Text>
              ) : (
                props.data.threads.map((item, i) => {
                  return <PostListing data={item} navigation={props.navigation} key={i} />;
                })
              )}
            </ScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Presentational;
