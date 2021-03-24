import React, { FC, useState } from "react";
import { Text } from "react-native";
import Navigator from "./navigation/MainTabNavigator";
import SignUpContainer from "./components/Login/Container";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTH } from "./queries";

interface IProps {}

const Entry: FC<IProps> = () => {
  const { loading, error, data, refetch } = useQuery(GET_AUTH);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;
  return data.getAuth.id ? <Navigator /> : <SignUpContainer refetch={refetch} />;
};

export default Entry;
