import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import ForumMap from "./ForumMap";
import styled from "styled-components";

interface IProps {
  modal: (id?: number) => void;
  id: number;
}

const ModalParent = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.View`
  width: 96%;
  height: 90%;
  border-color: #ccc;
  border-width: 1px;
  border-style: solid;
  background-color: white;
  padding: 0px;
  border-radius: 4px;
  background-color: #e7edf3;
`;

const BG = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const ForumTitle = styled.Text`
  font-size: 23px;
  font-family: "gelasio-bold";
  color: white;
`;

const fakeData = [
  {
    title: "Learning More About Logic Gates",
    first_name: "Ali",
    last_name: "Reubenstone",
    replies: "44",
    avatar: "https://miro.medium.com/max/3150/1*Umap0mwgh8y0eVQnZ9xTXg.jpeg"
  },
  {
    title: "Who Discovered Utma Benefits?",
    first_name: "Steven",
    last_name: "Cantor",
    replies: "2",
    avatar:
      "https://image.freepik.com/free-photo/creative-french-no-man-guy_1194-8063.jpg"
  }
];

export default class ForumModal extends Component<IProps> {
  render() {
    const { modal, id } = this.props;
    return (
      <ModalParent>
        <ModalContainer>
          <View style={{ height: "21%", position: "relative" }}>
            <BG source={require("../../assets/images/dragon.png")} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                width: "100%",
                height: "100%"
              }}
            >
              <View>
                <ForumTitle>Story Checkpoint</ForumTitle>
                <Text style={{ textAlign: "center", color: "white" }}>
                  1,459 online
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 10,
              paddingBottom: 10
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  width: 80,
                  marginRight: 12,
                  backgroundColor: "#4057FD",
                  alignSelf: "auto",
                  borderRadius: 18,
                  padding: 8,
                  paddingLeft: 12,
                  paddingRight: 12
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontFamily: "gelasio",
                    textAlign: "center"
                  }}
                >
                  Story
                </Text>
              </View>
              <View
                style={{
                  width: 80,
                  marginRight: 12,
                  borderColor: "#DED3D3",
                  borderWidth: 0.5,
                  backgroundColor: "#fff",
                  alignSelf: "auto",
                  borderRadius: 18,
                  padding: 8,
                  paddingLeft: 12,
                  paddingRight: 12
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    fontFamily: "gelasio",
                    textAlign: "center"
                  }}
                >
                  Tech
                </Text>
              </View>
              <View
                style={{
                  width: 80,
                  marginRight: 12,
                  borderColor: "#DED3D3",
                  borderWidth: 0.5,
                  backgroundColor: "#fff",
                  alignSelf: "auto",
                  borderRadius: 18,
                  padding: 8,
                  paddingLeft: 12,
                  paddingRight: 12
                }}
              >
                <Text
                  style={{
                    color: "grey",
                    fontFamily: "gelasio",
                    textAlign: "center"
                  }}
                >
                  Career
                </Text>
              </View>
            </View>
          </View>

          <Text
            style={{
              marginTop: 20,
              fontFamily: "gelasio",
              textAlign: "center"
            }}
          >
            {" "}
            Conversations
          </Text>

          <ForumMap data={fakeData} />
          <TouchableOpacity onPress={() => modal()}>
            <Text style={{ marginTop: 900 }}>[x]</Text>
          </TouchableOpacity>
        </ModalContainer>
      </ModalParent>
    );
  }
}
