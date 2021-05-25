import React, { FC, useEffect } from "react";
import { AppState, Text } from "react-native";
import Navigator from "../../navigation/MainTabNavigator";
import { useQuery } from "@apollo/react-hooks";
import { GET_MY_NOTIFICATIONS } from "../../queries";

interface IProps {}

const Entry: FC<IProps> = () => {
  const { loading, error, data, refetch } = useQuery(GET_MY_NOTIFICATIONS);
  const _handleAppStateChange = (nextAppState) => {
    if (nextAppState === "active") {
      refetch();
    }
  };
  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;
  return <Navigator />;
};

export default Entry;
