import React, { FC } from "react";
import { View, Image, Text, StyleSheet, Platform } from "react-native";
import styled from "styled-components";

interface IProps {
  overLay: boolean;
  glossary: boolean;
  progress_count: number;
}

const ProgressContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  top: ${(props) => (props.android ? "85%" : "88%")};
`;

const ProgressBar: FC<IProps> = ({ overLay, glossary, progress_count }) => {
  const android = Platform.OS === "android";

  return glossary ? null : overLay ? null : (
    <ProgressContainer android={android}>
      <View style={{ width: "100%" }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={{ height: 8.5, width: "90%", backgroundColor: "white", borderColor: "#0195FF", borderWidth: 0.25, borderRadius: 10, marginTop: 40, shadowOffset: { width: 0, height: 2 }, shadowColor: "black", shadowOpacity: 0.5 }}>
            <View style={[StyleSheet.absoluteFill, { backgroundColor: "#0195FF", borderRadius: 10, width: `${progress_count * 100}%` }]} />
            <Image source={require("../../assets/images/battleship.png")} style={{ width: 21, height: 21, top: -6.4, left: `${progress_count * 100 - 1.4}%` }} />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 5 }}>
          <View style={{ backgroundColor: "white", borderRadius: 5, padding: 3, borderWidth: 0.25, borderColor: "#0195FF" }}>
            <Text style={{ textAlign: "center", fontSize: 10, fontFamily: "gelasio" }}>{Math.round(progress_count * 100)} %</Text>
          </View>
        </View>
      </View>
    </ProgressContainer>
  );
};

export default ProgressBar;
