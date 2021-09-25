import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_MY_READING_BUDDIES } from "../../queries";
import { Modal, Text, View, TouchableOpacity, Image } from "react-native";
import SubmitReadingBuddy from "./SubmitReadingBuddy";
import RemoveBuddy from "./RemoveBuddy";
import styled from "styled-components";

interface IProps {
  reader_modal: boolean;
  toggleReaderModal: () => void;
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

const Link = styled.Text`
  text-align: center;
  color: #0195ff;
  font-family: gelasio;
`;

const ReadingBuddiesModal: FC<IProps> = ({ reader_modal, toggleReaderModal }) => {
  const { loading, error, data, refetch } = useQuery(GET_MY_READING_BUDDIES);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;

  return (
    <Modal visible={reader_modal} animationType="fade" transparent={true}>
      <OuterContainer>
        <InnerContainer>
          <TouchableOpacity onPress={() => toggleReaderModal()}>
            <Close>x</Close>
          </TouchableOpacity>
          <Text style={{ marginBottom: 7.5, fontFamily: "gelasio-med" }}>+ Reading Buddy</Text>
          <SubmitReadingBuddy refetch={refetch} />
          <Text style={{ marginBottom: 14.5, marginTop: 25, fontFamily: "gelasio-bold" }}>Reading Buddies</Text>
          {!data.getMyReadingBuddies ? (
            <Text>You have no reading buddies yet.</Text>
          ) : (
            data.getMyReadingBuddies.map((buddy) => {
              return (
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
                  <Image source={{ uri: buddy.user_avatar }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                  <Text style={{ marginLeft: 10 }}>{buddy.username}</Text>
                  <RemoveBuddy refetch={refetch} buddy_id={buddy.id} />
                </View>
              );
            })
          )}
          <TouchableOpacity onPress={() => refetch()}>
            <Text>Refresh</Text>
          </TouchableOpacity>
        </InnerContainer>
      </OuterContainer>
    </Modal>
  );
};

export default ReadingBuddiesModal;
