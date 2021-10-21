import React, { FC, useState } from "react";
import { View, Text, Image, Platform, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTH } from "../../../queries";
import styled from "styled-components";
import moment from "moment";
import analytics from "../../../Analytics";

interface IProps {
  data: any;
  navigation: any;
}

const Container = styled.View`
  margin-bottom: 24px;
`;

const PostListing: FC<IProps> = (props) => {
  const { data } = useQuery(GET_AUTH, { fetchPolicy: "cache-only" });
  const [on, switchToggle] = useState(false);
  // TIME STAMPS -- CONVERT TIME STRING TO JS OBECT (JSON.parse), THEN INSERT this object INTO JAVASCRIPT DATE(), THEN PASS THIS Date object INTO MOMENT.
  const converted = JSON.parse(props.data.time.thread_updated);
  const js_date_object = new Date(converted);
  const moment_object = moment(js_date_object);

  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Thread", { thread_id: props.data.id, title: props.data.title });
        analytics("thread_open", { distinct_id: data.getAuth.id, thread_id: props.data.id });
      }}
    >
      <Container>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{ uri: `${props.data.user.user_avatar}` }} style={{ width: 40, height: 40, borderRadius: 15 }} />
          <View style={{ marginLeft: 13 }}>
            <Text style={{ color: "#0195FF", fontFamily: "gelasio" }}>{props.data.title}</Text>
            <Text style={{ color: "#6B737C", fontFamily: "gelasio", fontSize: Platform.OS === "android" ? 9 : 12, marginTop: 2, overflow: "hidden" }}>
              posted by {props.data.user.username} • last reply {moment_object.fromNow()}
            </Text>
            {props.data.audio ? <Image source={require("../../../assets/images/sound_wave.png")} style={{ width: 16, height: 16, marginTop: 5 }} /> : null}
          </View>
        </View>
      </Container>
    </TouchableOpacity>
  );
};

export default PostListing;
