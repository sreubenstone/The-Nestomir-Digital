import React, { FC } from "react";
import { Modal, TouchableOpacity, Linking, Text, Image } from "react-native";

import styled from "styled-components";

interface IProps {
  eggmodal: boolean;
  quiz_number: number;
  toggleEggModal: (quiz_number: number) => void;
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
  height: 75%;
  width: 82%;
  border-radius: 11px;
  padding: 15px;
  border-color: #0195ff;
  border-width: 0.5px;
`;

const Icon = styled.Image`
  width: 45px;
  height: 45px;
  align-self: center;
`;

const Link = styled.Text`
  color: #0195ff;
  font-family: "gelasio";
  text-align: center;
  margin-top: 20;
`;

const Close = styled.Text`
  text-align: right;
  padding: 5px;
`;

const EggModal: FC<IProps> = ({ eggmodal, toggleEggModal, quiz_number }) => {
  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  const challenge_links: any = ["https://forms.gle/Z2CuiZDfrQQCZSDC7", "https://forms.gle/KsgvEag2rM6yWsvq5"];

  return (
    <Modal visible={eggmodal} animationType="fade" transparent={true}>
      <OuterContainer>
        <InnerContainer>
          <TouchableOpacity onPress={() => toggleEggModal(quiz_number)}>
            <Close>x</Close>
          </TouchableOpacity>
          <Icon source={require("../../assets/images/egg.png")} />
          <Text style={{ marginTop: 15 }}>Wow, you found a blue egg! You can now take a short quiz..and if you pass...you will earn an exclusive Nestomir NFT.</Text>
          <TouchableOpacity onPress={() => openURL(challenge_links[quiz_number])}>
            <Link>Take quiz</Link>
          </TouchableOpacity>
          <Image style={{ marginTop: 40, width: 300, height: 400, alignSelf: "center" }} source={{ uri: "https://res.cloudinary.com/dshxqbjrf/image/upload/v1639873349/test_qtfnej.png" }} />
        </InnerContainer>
      </OuterContainer>
    </Modal>
  );
};

export default EggModal;
