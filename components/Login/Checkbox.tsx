import React, { FC } from "react";
import { Image, TouchableOpacity } from "react-native";
interface IProps {
  checked: boolean;
  termsToggle: () => void;
}

const Checkbox: FC<IProps> = ({ checked, termsToggle }) => {
  return checked ? (
    <TouchableOpacity onPress={() => termsToggle()}>
      <Image source={require("../../assets/images/check.png")} style={{ width: 10, height: 10, alignSelf: "center", marginLeft: 10 }} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => termsToggle()}>
      <Image source={require("../../assets/images/blank-check-box.png")} style={{ width: 10, height: 10, alignSelf: "center", marginLeft: 10 }} />
    </TouchableOpacity>
  );
};

export default Checkbox;
