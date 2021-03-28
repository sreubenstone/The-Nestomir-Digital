import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import * as SecureStore from "expo-secure-store";
import { GET_BOOKMARK } from "../../queries";
import { Text } from "react-native";
import ProgressContainer from "./ProgressContainer";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ProgressLoader: FC<IProps> = (props) => {
  const { loading, error, data } = useQuery(GET_BOOKMARK);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;
  if (!data.getBookmark) {
    SecureStore.deleteItemAsync("jwt");
    return <Text>Please exit the app and restart, there was an error</Text>;
  }
  return <ProgressContainer navigation={props.navigation} data={data.getBookmark} />;
};

export default ProgressLoader;
