import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";
import moment from "moment";
import styled from "styled-components";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  toggleNotifModal: () => void;
  notification: any;
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  height: 100px;
  width: 100%;
`;

const Pic = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 17px;
  margin-right: 15px;
`;

const Divider = styled.View`
  border-bottom-width: 1px;
  margin-left: 25px;
  margin-right: 25px;
  border-style: solid;
  border-color: grey;
`;

const NotificationItem: FC<IProps> = ({ notification, navigation, toggleNotifModal }) => {
  // TIME STAMPS -- CONVERT TIME STRING TO JS OBECT (JSON.parse), THEN INSERT this object INTO JAVASCRIPT DATE(), THEN PASS THIS Date object INTO MOMENT.
  const converted = JSON.parse(notification.time.time_stamp);
  const js_date_object = new Date(converted);
  const moment_object = moment(js_date_object);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Thread", { thread_id: notification.thread_id, title: notification.thread_title });
        toggleNotifModal();
      }}
    >
      <View>
        <Container>
          <Pic source={{ uri: notification.notification_image }} />
          <View style={{ width: "80%" }}>
            <Text>{notification.body}</Text>
            <Text style={{ marginBottom: 5, marginTop: 3, color: "grey" }}>{moment_object.fromNow()}</Text>
          </View>
        </Container>
        <Divider />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
