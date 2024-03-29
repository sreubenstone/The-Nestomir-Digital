import React, { FC, useState, useEffect } from "react";
import * as Font from "expo-font";
import * as SecureStore from "expo-secure-store";
import * as Sentry from "sentry-expo";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import Entry from "./components/Other/Entry";
import Env from "./config";

Sentry.init({
  dsn: "",
  enableInExpoDevelopment: false,
  debug: false, // Sentry will try to print out useful debugging information if something goes wrong with sending an event. Set this to `false` in production.
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: `${Env.server}/graphql`,
  request: async (operation) => {
    const token = await SecureStore.getItemAsync("jwt");
    operation.setContext({
      headers: {
        authorization: token ? token : "",
      },
    });
  },
});

cache.writeData({
  data: {
    bookmarker: 909,
  },
});

const App: FC = () => {
  const [fontLoaded, font] = useState(false);
  useEffect(() => {
    const fontLoad = async () => {
      await Font.loadAsync({
        "gelasio-bold": require("./assets/fonts/Gelasio-Bold.ttf"),
        "gelasio-med": require("./assets/fonts/Gelasio-Medium.ttf"),
        gelasio: require("./assets/fonts/Gelasio-Regular.ttf"),
        "gelasibro-italic": require("./assets/fonts/Gelasio-Italic.ttf"),
        code: require("./assets/fonts/FiraCode-VariableFont_wght.ttf"),
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
