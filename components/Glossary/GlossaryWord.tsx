import React, { FC } from "react";
import { SliderComponent } from "react-native";
import styled from "styled-components";

const WordContainer = styled.View`
  background-color: #a1c5be;
  padding: 0.5px;
  padding-left: 3px;
  padding-right: 3px;
  border-radius: 5px;
  margin-top: -2px;
`;

const Word = styled.Text`
  color: white;
  font-size: 17px;
  line-height: 26px;
  font-family: "gelasio";
`;

interface IProps {
  word: string;
  toggleGlossary: (name: string) => void;
}

const GlossaryWord: FC<IProps> = ({ word, toggleGlossary }) => {
  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <WordContainer
      onTouchEndCapture={(e) => {
        e.stopPropagation();
        toggleGlossary(word.charAt(0).toUpperCase() + word.slice(1));
      }}
    >
      <Word>{word}</Word>
    </WordContainer>
  );
};

export default GlossaryWord;
