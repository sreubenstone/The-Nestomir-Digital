import React, { FC } from "react";
import { Modal, TouchableOpacity, ScrollView, Linking } from "react-native";
import Glossary from "../Glossary";
import styled from "styled-components";
import Presentational from "../ui/Presentational";

interface IProps {
  glossary: boolean;
  glossary_element: string;
  toggleGlossary: (name: string) => void;
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

const GlossaryModal: FC<IProps> = ({ glossary, glossary_element, toggleGlossary }) => {
  const item = Glossary[glossary_element];
  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };
  return (
    <Modal visible={glossary} animationType="fade" transparent={true}>
      <OuterContainer>
        <InnerContainer>
          <TouchableOpacity onPress={() => toggleGlossary(glossary_element)}>
            <Close>x</Close>
          </TouchableOpacity>
          <ScrollView>
            <Presentational modal item={item} />
          </ScrollView>
        </InnerContainer>
      </OuterContainer>
    </Modal>
  );
};

export default GlossaryModal;
