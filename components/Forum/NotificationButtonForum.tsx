import React, { FC } from "react";
import * as Notifications from "expo-notifications";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_MY_NOTIFICATIONS, MARK_READ } from "../../queries";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

interface IProps {
  toggleNotifModal: () => void;
}

const Bubble = styled.View`
  padding: 1px;
  padding-left: 4.75px;
  padding-top: 1.75px;
  background-color: blue;
  height: 14px;
  width: 14px;
  border-radius: 7px;
  left: 32%;
  top: -20%;
  position: absolute;
`;

const BellIcon = styled.Image`
  width: 21px;
  height: 21px;
  margin-right: 12px;
`;

const Number = styled.Text`
  font-size: 8.5px;
  color: white;
`;

const NotificationButtonForum: FC<IProps> = ({ toggleNotifModal }) => {
  const { data } = useQuery(GET_MY_NOTIFICATIONS, { fetchPolicy: "cache-only" });
  const [markRead, { loading: mutationLoading, error: mutationError, client }] = useMutation(MARK_READ);

  const filter = data.getMyNotifications.filter((item) => {
    return !item.read;
  });

  const badgeCount = filter.length;

  return (
    <TouchableOpacity
      onPress={() => {
        toggleNotifModal();
        const data = client.readQuery({ query: GET_MY_NOTIFICATIONS });
        let array = data.getMyNotifications;
        array.forEach((item, index) => {
          item.read = true;
        });
        client.writeQuery({
          query: GET_MY_NOTIFICATIONS,
          data: {
            getMyNotifications: array,
          },
        });
        markRead();
        Notifications.setBadgeCountAsync(0);
      }}
    >
      <BellIcon source={require("../../assets/images/bell.png")} />
      {badgeCount ? (
        <Bubble>
          <Number>{badgeCount}</Number>
        </Bubble>
      ) : null}
    </TouchableOpacity>
  );
};

export default NotificationButtonForum;
