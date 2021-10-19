import React, { FC, useState } from "react";
import moment from "moment";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";

interface IProps {
  data: any;
  navigation: any;
}

const CommentCard = styled.View`
  padding: 10px;
  padding-top: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-width: 0.5px;
  border-color: #d1d5da;
  background-color: #fff;
`;
const TopCard = styled.View`
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-width: 0.5px;
  border-color: #d1d5da;
  background-color: #f6f8fa;
`;

const Comment: FC<IProps> = (props) => {
  // TIME STAMPS — CONVERT TIME STRING TO JS OBECT (JSON.parse), THEN INSERT this object INTO JAVASCRIPT DATE(), THEN PASS THIS Date object INTO MOMENT.
  const converted = JSON.parse(props.data.time.time_stamp);
  const js_date_object = new Date(converted);
  const moment_object = moment(js_date_object);

  return (
    <View>
      <TopCard>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Profile", { user_id: props.data.user.id })}>
            <Image source={{ uri: `${props.data.user.user_avatar}` }} style={{ width: 30, height: 30, borderRadius: 10 }} />
          </TouchableOpacity>
          <View style={{ marginLeft: 10, alignSelf: "center" }}>
            <Text style={{ fontFamily: "gelasio-med", fontSize: 12, color: "#787D9C" }}>
              {props.data.user.username} commented {moment_object.fromNow()}
            </Text>
          </View>
        </View>
      </TopCard>
      <CommentCard>
        <Text style={{ fontFamily: "gelasio", marginTop: 10, color: "#787D9C" }}>{props.data.body}</Text>
        {/* <Text style={{ fontFamily: "gelasio", marginTop: 10, color: "#787D9C" }}>👍🏻</Text> */}
      </CommentCard>
    </View>
  );
};

export default Comment;
