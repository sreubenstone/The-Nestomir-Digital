import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MY_READING_BUDDIES, GET_AUTH } from "../../queries";
import { Modal, Text, View, TouchableOpacity, Image, ScrollView, Keyboard, TouchableWithoutFeedback } from "react-native";
import * as Clipboard from "expo-clipboard";
import SubmitReadingBuddy from "./SubmitReadingBuddy";
import RemoveBuddy from "./RemoveBuddy";
import styled from "styled-components";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  reader_modal: boolean;
  toggleReaderModal: () => void;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const OuterContainer = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const InnerContainer = styled.View`
  background-color: #fff;
  height: 60%;
  width: 82%;
  border-radius: 11px;
  padding: 15px;
  border-color: #0195ff;
  border-width: 0.5px;
`;

const Close = styled.Text`
  text-align: right;
  padding: 5px;
`;

const Icon = styled.Image`
  width: 45px;
  height: 45px;
  align-self: center;
`;

const Card = styled.View`
  border-radius: 13px;
  margin-bottom: 12px;
  padding: 6px;
`;

const Line = styled.View`
  border-bottom-width: 0.5px;
  width: 80%;
  margin-left: 20px;
  border-color: #d1d5da;
`;

const ReadingBuddiesModal: FC<IProps> = ({ reader_modal, toggleReaderModal, navigation }) => {
  const { data: profile_object } = useQuery(GET_AUTH, { fetchPolicy: "cache-only" });
  const { loading, error, data, refetch } = useQuery(GET_MY_READING_BUDDIES);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;

  const copyToClipboard = () => {
    Clipboard.default.setString(`Use this code to sign up for The Nestomir on iOS or Android: ${profile_object.getAuth.secret_code}`);
  };

  return (
    <Modal visible={reader_modal} animationType="fade" transparent={true}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <OuterContainer>
          <InnerContainer>
            <TouchableOpacity onPress={() => toggleReaderModal()}>
              <Close>x</Close>
            </TouchableOpacity>
            <Icon source={require("../../assets/images/lightning.png")} />
            <View style={{ backgroundColor: "#FAFFD8", padding: 5, marginTop: 15 }}>
              <Text style={{ color: "grey", fontSize: 12, textAlign: "center" }}>
                This is your secret reader code: <Text style={{ fontWeight: "bold" }}>{profile_object.getAuth.secret_code}.</Text> Use it to sync up your book with friends! When you share it with someone who has not signed up yet, make sure they
                enter your secret code on sign up, and you will receive $10.
              </Text>
            </View>
            <TouchableOpacity onPress={() => copyToClipboard()}>
              <Text style={{ textAlign: "right", fontSize: 10, color: "#5C79B9" }}>copy code</Text>
            </TouchableOpacity>
            <Text style={{ marginBottom: 7.5, fontFamily: "gelasio-med", marginTop: 23 }}>+ Reading Buddy</Text>
            <SubmitReadingBuddy refetch={refetch} />

            <Text style={{ marginBottom: 14.5, marginTop: 25, fontFamily: "gelasio-bold" }}>My Reading Buddies</Text>

            {!data.getMyReadingBuddies ? (
              <Text style={{ fontSize: 11 }}>Reading buddies receive notifications about each other's reading positions. You have no reading buddies yet.</Text>
            ) : (
              data.getMyReadingBuddies.map((buddy) => {
                return (
                  <ScrollView>
                    <Card>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity
                          onPress={() => {
                            toggleReaderModal();
                            navigation.navigate("Profile", { user_id: buddy.id });
                          }}
                        >
                          <Image source={{ uri: buddy.user_avatar }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                        </TouchableOpacity>
                        <View style={{ marginLeft: "3.0%" }}>
                          <Text style={{ marginLeft: 10, fontFamily: "gelasio-med" }}>{buddy.username}</Text>
                          <Text style={{ marginLeft: 10, marginTop: 3, fontFamily: "gelasio", fontSize: 11 }}>
                            on: {!buddy.chapter ? "Prologue" : buddy.chapter}, {!buddy.percentage ? "0" : buddy.percentage}% read
                          </Text>
                          <RemoveBuddy refetch={refetch} buddy_id={buddy.id} />
                        </View>
                      </View>
                    </Card>
                    <Line />
                  </ScrollView>
                );
              })
            )}
            <TouchableOpacity onPress={() => refetch()}>
              <Text style={{ textAlign: "center", fontSize: 9, color: "#6382E9", marginTop: 25 }}>Refresh list</Text>
            </TouchableOpacity>
          </InnerContainer>
        </OuterContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ReadingBuddiesModal;
