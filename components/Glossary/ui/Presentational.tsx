import React, { FC } from "react";
import { View, Linking, TouchableOpacity } from "react-native";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import { monoBlue } from "react-syntax-highlighter/styles/hljs";
import styled from "styled-components";

interface IProps {
  item: any;
  modal: boolean;
}

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
  margin-top: 22px;
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

const Presentational: FC<IProps> = ({ item, modal }) => {
  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };
  return (
    <View>
      {modal && <Title>{item.title}</Title>}
      <SubHeader>{item.pron}</SubHeader>

      <SectionHeader>Description</SectionHeader>
      <Desc>{item.description}</Desc>
      {item.ldshab && (
        <View>
          <SectionHeader>Nestomirian History</SectionHeader>
          <Desc>{item.ldshab}</Desc>
        </View>
      )}

      {item.snippit && !modal && (
        <View>
          <SectionHeader>Example</SectionHeader>
          <SyntaxView>
            <SyntaxHighlighter style={monoBlue} language="python">
              {item.snippit}
            </SyntaxHighlighter>
          </SyntaxView>
        </View>
      )}

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

      {item.recommended && !modal && (
        <View>
          <SectionHeader>Recommended Activities (La'Tishva)</SectionHeader>
          {item.recommended.map((rec) => (
            <LineEl>• {rec}</LineEl>
          ))}
        </View>
      )}
    </View>
  );
};

export default Presentational;
