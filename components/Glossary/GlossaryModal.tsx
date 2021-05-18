import React, { FC } from "react";
import { Modal, TouchableOpacity, ScrollView, Linking, View } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/styles/hljs";
import Glossary from "./Glossary";
import styled from "styled-components";

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
  /* box-shadow: 2px 2px 2px #f3a9e8; */
`;

const SyntaxView = styled.View`
  height: 63px;
  margin-top: 5px;
  width: 100%;
`;

const Title = styled.Text`
  font-family: "gelasio-bold";
  text-align: center;
  font-size: 23px;
`;

const SubHeader = styled.Text`
  margin-top: 5px;
  text-align: center;
`;

const SectionHeader = styled.Text`
  font-weight: bold;
  margin-top: 15px;
`;

const Desc = styled.Text`
  margin-top: 10px;
  font-family: "gelasio";
  font-size: 14px;
`;

const LineEl = styled.Text`
  margin-top: 5px;
`;

const Link = styled.Text`
  color: #0195ff;
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
            <Title>{item.title}</Title>
            <SubHeader>{item.pron}</SubHeader>
            <SectionHeader>Description</SectionHeader>
            <Desc>{item.description}</Desc>
            {item.ldshab && (
              <View>
                <SectionHeader>Nestomirian History</SectionHeader>
                <Desc>{item.ldshab}</Desc>
              </View>
            )}
            {/* <SectionHeader>Example</SectionHeader>
            <SyntaxView>
              <SyntaxHighlighter style={monoBlue} language="python">
                {item.snippit}
              </SyntaxHighlighter>
            </SyntaxView> */}
            <SectionHeader>Suggested Earth Learnings</SectionHeader>
            {item.suggested.map((sug) => {
              return (
                <TouchableOpacity onPress={() => openURL(sug.url)}>
                  <LineEl>
                    • <Link>{sug.title}</Link>
                  </LineEl>
                </TouchableOpacity>
              );
            })}
            {/* {item.recommended && (
              <View>
                <SectionHeader>Recommended Activities (La'Tishva)</SectionHeader>
                {item.recommended.map((rec) => (
                  <LineEl>• {rec}</LineEl>
                ))}
              </View>
            )} */}
          </ScrollView>
        </InnerContainer>
      </OuterContainer>
    </Modal>
  );
};

export default GlossaryModal;
