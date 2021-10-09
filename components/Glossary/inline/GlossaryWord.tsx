import React, { FC } from "react";
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
  lookup_string: string;
}

const GlossaryWord: FC<IProps> = ({ word, toggleGlossary, lookup_string }) => {
  return (
    <WordContainer
      onTouchEndCapture={(e) => {
        e.stopPropagation();
        toggleGlossary(lookup_string);
      }}
    >
      <Word>{word}</Word>
    </WordContainer>
  );
};

export default GlossaryWord;
