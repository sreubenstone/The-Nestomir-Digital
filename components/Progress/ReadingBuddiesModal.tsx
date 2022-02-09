import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MY_READING_BUDDIES, GET_AUTH } from "../../queries";
import { Modal, Text, View, TouchableOpacity, Image, ScrollView, Keyboard, TouchableWithoutFeedback, Platform } from "react-native";
import * as Clipboard from "expo-clipboard";
import SubmitReadingBuddy from "./SubmitReadingBuddy";
import RemoveBuddy from "./RemoveBuddy";
import styled from "styled-components";

interface IProps {
  reader_modal: boolean;
  toggleReaderModal: () => void;
  navigation: any;
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
  height: ${(props) => (props.android ? "96%" : "80%")};
  width: ${(props) => (props.android ? "98%" : "88%")};
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
  const android = Platform.OS === "android";
  const { data: profile_object } = useQuery(GET_AUTH, { fetchPolicy: "cache-only" });
  const { loading, error, data, refetch } = useQuery(GET_MY_READING_BUDDIES);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;

  const copyToClipboard = () => {
    Clipboard.setString(
      `Hey this is my secret reader code for The Nestomir: ${profile_object.getAuth.secret_code}. I get $5 if you enter this when you sign up 😁. If you've already signed up you can use the code to add me as a reading buddy. If you don't know what The Nestomir is...it's the coolest sci fi book/app ever 😜.`
    );
  };

  return (
    <Modal visible={reader_modal} animationType="fade" transparent={true}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <OuterContainer>
          <InnerContainer android={android}>
            <TouchableOpacity onPress={() => toggleReaderModal()}>
              <Close>x</Close>
            </TouchableOpacity>
            <ScrollView>
              <Icon source={require("../../assets/images/lightning.png")} />
              <View style={{ backgroundColor: "#FAFFD8", padding: 5, marginTop: 15 }}>
                <Text style={{ color: "grey", fontSize: 12, textAlign: "center" }}>
                  Paste in your friend's secret reader code in the text box below to add them as a reading buddy. Your friends can also add you with your code. {"\n\n"} When you share your secret code with someone who has not signed up yet, make sure
                  they enter your secret code when they sign up, and you will receive $5!
                </Text>
              </View>
              <View style={{ backgroundColor: "#FAFFD8", padding: 5, marginTop: 15, borderRadius: 5 }}>
                <Text style={{ color: "grey", fontSize: 15, textAlign: "center", fontWeight: "bold" }}>{profile_object.getAuth.secret_code}</Text>
              </View>
              <TouchableOpacity onPress={() => copyToClipboard()}>
                <Text style={{ textAlign: "right", fontSize: 10, color: "grey" }}>copy</Text>
              </TouchableOpacity>

              <Text style={{ marginBottom: 7.5, fontFamily: "gelasio-med", marginTop: 23 }}>+ Reading Buddy</Text>
              <SubmitReadingBuddy refetch={refetch} />
              <Text style={{ marginBottom: 14.5, marginTop: 25, fontFamily: "gelasio-bold" }}>My Reading Buddies</Text>
              {!data.getMyReadingBuddies ? (
                <Text style={{ fontSize: 11 }}>Reading buddies receive notifications about each other's reading positions...add one above.</Text>
              ) : (
                data.getMyReadingBuddies.map((buddy, i) => {
                  return (
                    <View key={i}>
                      <Card>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                          <TouchableOpacity
                            onPress={() => {
                              toggleReaderModal();
                              navigation.navigate("Profile_Profile", { user_id: buddy.id });
                            }}
                          >
                            <Image source={{ uri: buddy.user_avatar }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                          </TouchableOpacity>
                          <View style={{ marginLeft: "3.0%" }}>
                            <Text style={{ marginLeft: 10, fontFamily: "gelasio-med" }}>{buddy.username}</Text>
                            <Text style={{ marginLeft: 10, marginTop: 3, fontFamily: "gelasio", fontSize: 11 }}>
                              on chapter: {!buddy.bookmark.chapter ? "Prologue" : buddy.bookmark.chapter}, {!buddy.bookmark.percentage ? "0" : Math.round(buddy.bookmark.percentage)}% read
                            </Text>
                            <RemoveBuddy refetch={refetch} buddy_id={buddy.id} />
                          </View>
                        </View>
                      </Card>
                      <Line />
                    </View>
                  );
                })
              )}

              <TouchableOpacity onPress={() => refetch()}>
                <Text style={{ textAlign: "center", fontSize: 9, color: "#6382E9", marginTop: 25, marginBottom: 150 }}>Refresh list</Text>
              </TouchableOpacity>
            </ScrollView>
          </InnerContainer>
        </OuterContainer>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ReadingBuddiesModal;
