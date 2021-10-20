import React, { FC } from "react";
import { Platform, Text } from "react-native";

import styled from "styled-components";

const WordContainer = styled.View`
  background-color: #a1c5be;
  padding: 0.5px;
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 5px;
  margin-top: -2px;
`;

const IOSWord = styled.Text`
  color: white;
  font-size: 17px;
  line-height: 26px;
  font-family: "gelasio";
`;

const ANDROIDWord = styled.Text`
  color: #869b97;
  font-size: 17px;
  line-height: 26px;
  font-family: "gelasio";
`;

interface IProps {
  word: string;
  toggleGlossary: (name: string) => void;
  lookup_string: string;
}

const GlossaryWord: FC<IProps> = ({ word, toggleGlossary, lookup_string }) => {
  // ANDROID HAS NO ENCAPSULATING VIEW AND THE TEXT IS GREEN DUE TO OS ISSUES RENDERING VIEW ON DROID
  return Platform.OS === "android" ? (
    <ANDROIDWord
      onTouchEndCapture={(e) => {
        e.stopPropagation();
        toggleGlossary(lookup_string);
      }}
    >
      {word}
    </ANDROIDWord>
  ) : (
    <WordContainer
      onTouchEndCapture={(e) => {
        e.stopPropagation();
        toggleGlossary(lookup_string);
      }}
    >
      <IOSWord>{word}</IOSWord>
    </WordContainer>
  );
};

export default GlossaryWord;
