import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTH } from "../../queries";
import { Modal, Text, TouchableOpacity } from "react-native";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";
import styled from "styled-components";

interface IProps {
  profile_modal: boolean;
  toggleProfileModal: () => void;
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

const Link = styled.Text`
  text-align: center;
  color: #0195ff;
  font-family: gelasio;
`;

const ProfileModal: FC<IProps> = ({ profile_modal, navigation, toggleProfileModal }) => {
  const { data } = useQuery(GET_AUTH, { fetchPolicy: "cache-only" });

  return (
    <Modal visible={profile_modal} animationType="fade" transparent={false}>
      <TouchableOpacity onPress={() => toggleProfileModal()}>
        <Close>x</Close>
      </TouchableOpacity>
      <InnerContainer>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile", { user_id: data.getAuth.id });
            toggleProfileModal();
          }}
        >
          <Link style={{ marginTop: 40, marginBottom: 25 }}>My Profile</Link>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Support");
            toggleProfileModal();
          }}
        >
          <Link>Report Issue or Feedback</Link>
        </TouchableOpacity>
      </InnerContainer>
    </Modal>
  );
};

export default ProfileModal;
