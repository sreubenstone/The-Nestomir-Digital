import React, { FC, useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SecureStore from "expo-secure-store";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from "@apollo/react-hooks";
import Entry from "./Entry";
import Env from "./config";

const cache = new InMemoryCache();


const client = new ApolloClient({
  cache,
  uri: `${Env.server}/graphql`,
  request: async operation => {
    const token = await SecureStore.getItemAsync("jwt");
    operation.setContext({
      headers: {
        authorization: token ? token : ""
      }
    });
  }
});

cache.writeData({
  data: {
    bookmarker: 909
  },
});

const App: FC = () => {
  const [fontLoaded, font] = useState(false);
  useEffect(() => {
    const fontLoad = async () => {
      await Font.loadAsync({
        "gelasio-bold": require("./assets/fonts/Gelasio-Bold.ttf"),
        "gelasio-med": require("./assets/fonts/Gelasio-Medium.ttf"),
        gelasio: require("./assets/fonts/Gelasio-Regular.ttf")
      });
      font(true);
    };
    fontLoad();
  });

  return fontLoaded ? (
    <ApolloProvider client={client}>
      <Entry />
    </ApolloProvider>
  ) : null;
};

export default App;
