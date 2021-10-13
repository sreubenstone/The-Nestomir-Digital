import React, { Component } from "react";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";
import { TouchableOpacity, Image } from "react-native";

import Glossary from "../Glossary";
import Presentational from "../ui/Presentational";
import styled from "styled-components";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Container = styled.View`
  margin-top: 0%;
  padding: 15px;
  padding-top: 10px;
`;

export default class GlossaryDetailView extends Component<IProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("entry_title"),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate("FullGlossaryIndex")}>
          <Image source={require("../../../assets/images/back.png")} style={{ width: 20, height: 20, marginLeft: 12.5 }} />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const { navigation } = this.props;
    const glossary_element = navigation.getParam("glossary_element");
    const item = Glossary[glossary_element];

    return (
      <Container>
        <Presentational modal={false} item={item} />
      </Container>
    );
  }
}
