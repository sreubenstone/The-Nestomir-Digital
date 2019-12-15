import React, { FC } from "react";
import { Text } from "react-native";
import { GlobalStyles } from "../Stylesheet";

const Logo: FC = () => {
  return <Text style={GlobalStyles.headerText}>Keep going, Steven!</Text>;
};

export default Logo;
