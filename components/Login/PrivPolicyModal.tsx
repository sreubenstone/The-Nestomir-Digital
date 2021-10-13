import React, { FC } from "react";
import { Modal, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import styled from "styled-components";

interface IProps {
  open: boolean;
  togglePModal: () => void;
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

const privModal: FC<IProps> = ({ open, togglePModal }) => {
  return (
    <Modal visible={open} animationType="fade" transparent={true}>
      <OuterContainer>
        <InnerContainer>
          <TouchableOpacity onPress={() => togglePModal()}>
            <Close>x</Close>
          </TouchableOpacity>
          <ScrollView>
            <Text>k</Text>
          </ScrollView>
        </InnerContainer>
      </OuterContainer>
    </Modal>
  );
};

export default privModal;
