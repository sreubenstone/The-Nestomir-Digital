import React, { Component } from "react";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";
import Glossary from "../Glossary";
import Presentational from "../ui/Presentational";
import styled from "styled-components";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Container = styled.View`
  margin-top: 15%;
  padding: 15px;
`;

export default class GlossaryDetailView extends Component<IProps> {
  static navigationOptions = {
    header: null,
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
