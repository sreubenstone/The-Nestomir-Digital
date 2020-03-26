import React, { FC, useState } from "react";
import { Text } from "react-native";
import Navigator from "./navigation/MainTabNavigator";
import SignUpContainer from "./components/Login/Container";
import { GET_AUTH } from "./queries";
import { useQuery } from "@apollo/react-hooks";

interface IProps {}

const Entry: FC<IProps> = () => {
  const { loading, error, data, refetch } = useQuery(GET_AUTH);
  if (loading) return <Text>"Loading..."</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;
  console.log(data);
  return data.getAuth.id ? (
    <Navigator />
  ) : (
    <SignUpContainer refetch={refetch} />
  );
};

export default Entry;
