import React, { FC, useEffect, useState } from "react";
import { Text, Image, TouchableOpacity } from "react-native";

interface IProps {
  word: string;
  quiz_number: number;
  toggleEggModal: (quiz_number: number) => void;
}

const EggWord: FC<IProps> = ({ word, toggleEggModal, quiz_number }) => {
  const [unlock, setUnlock] = useState(false);

  useEffect(() => {
    const unlock_number = 2;
    const selection = Math.floor(Math.random() * 3);
    if (selection === unlock_number) {
      setUnlock(true);
    }
  });

  return unlock ? (
    <TouchableOpacity onPress={() => toggleEggModal(quiz_number)}>
      <Image source={require("../../assets/images/egg.png")} style={{ width: 14, height: 14, marginBottom: 6 }} />
    </TouchableOpacity>
  ) : (
    <Text>{word}</Text>
  );
};

export default EggWord;
