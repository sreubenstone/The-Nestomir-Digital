import React, { FC, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

const ReaderStat: FC = () => {
  const [appear, setAppear] = useState(true);

  useEffect(() => {
    setTimeout(() => setAppear(false), 5000);
  });

  return appear ? (
    <View style={{ position: "absolute", bottom: "101%", left: "9%", display: "flex" }}>
      <View style={{ flexDirection: "row" }}>
        <Image source={require("../../assets/images/alien.png")} style={{ width: 40, height: 40, marginRight: 5 }} />
        <View style={{ backgroundColor: "#FFF", width: "75%", borderWidth: 0.5, borderRadius: 5, padding: 4, borderColor: "grey" }}>
          <Text style={{ fontSize: 11 }}>
            There are <Text style={{ color: "#0195FF" }}>{Math.floor(Math.random() * 20) + 5}</Text> readers currently reading. Don't miss out on the adventure!
          </Text>
        </View>
      </View>
    </View>
  ) : null;
};

export default ReaderStat;
