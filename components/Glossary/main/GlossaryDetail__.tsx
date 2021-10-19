import React, { Component } from "react";
import { TouchableOpacity, Image, ScrollView } from "react-native";

import Glossary from "../Glossary";
import Presentational from "../ui/Presentational";
import styled from "styled-components";

interface IProps {
  route: any;
  navigation: any;
}

const Container = styled.View`
  margin-top: 0%;
  padding: 15px;
  padding-top: 10px;
`;

export default class GlossaryDetailView extends Component<IProps> {
  render() {
    const { route } = this.props;
    const { glossary_element } = route.params;
    const item = Glossary[glossary_element];

    return (
      <Container>
        <ScrollView>
          <Presentational modal={false} item={item} />
        </ScrollView>
      </Container>
    );
  }
}
