import React, { Component } from "react";
import * as Font from "expo-font";
import * as SecureStore from "expo-secure-store";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Navigator from "./navigation/MainTabNavigator";
import SignUpContainer from "./components/Login/Container";
import { GET_AUTH } from "./queries";
import { useQuery } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "https://1abf00bc.ngrok.io",
  request: async operation => {
    const token = await SecureStore.getItemAsync("jwt");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});

export default class App extends Component<{}> {
  state = {
    fontLoaded: false,
    auth: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      "gelasio-bold": require("./assets/fonts/Gelasio-Bold.ttf"),
      "gelasio-med": require("./assets/fonts/Gelasio-Medium.ttf"),
      gelasio: require("./assets/fonts/Gelasio-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded, auth } = this.state;
    return fontLoaded ? (
      auth ? (
        <ApolloProvider client={client}>
          <Navigator />
        </ApolloProvider>
      ) : (
        <SignUpContainer />
      )
    ) : null;
  }
}
