import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PROFILE } from "../Other/queries";
import Presentational from "./Presentational";
import { Text } from "react-native";

interface IProps {
  navigation: any;
  user_id: Number;
}

const ProfileLoader: FC<IProps> = (props) => {
  const { loading, error, data } = useQuery(GET_PROFILE, { variables: { id: props.user_id } });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;
  return <Presentational data={data.getProfile} navigation={props.navigation} />;
};

export default ProfileLoader;
