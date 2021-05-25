import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MY_NOTIFICATIONS } from "../../queries";
import NotificationItem from "./UI/NotificationItem";
import { Modal, Text, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  notif_modal: boolean;
  toggleNotifModal: () => void;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const InnerContainer = styled.View`
  margin-top: 4%;
`;

const Close = styled.Text`
  text-align: right;
  padding: 5px;
  margin-top: 35px;
  margin-right: 14px;
  font-size: 20px;
`;

const Title = styled.Text`
  text-align: center;
  font-family: gelasio-bold;
  font-size: 19px;
  margin-bottom: 5px;
`;

const GlossaryModal: FC<IProps> = ({ notif_modal, navigation, toggleNotifModal }) => {
  const { data } = useQuery(GET_MY_NOTIFICATIONS, { fetchPolicy: "cache-only" });

  return (
    <Modal visible={notif_modal} animationType="fade" transparent={false}>
      <TouchableOpacity onPress={() => toggleNotifModal()}>
        <Close>x</Close>
      </TouchableOpacity>
      <InnerContainer>
        <Title>Notifications</Title>
        {!data.getMyNotifications.length
          ? null
          : data.getMyNotifications.map((notification) => {
              return <NotificationItem notification={notification} navigation={navigation} toggleNotifModal={toggleNotifModal} />;
            })}
      </InnerContainer>
    </Modal>
  );
};

export default GlossaryModal;
