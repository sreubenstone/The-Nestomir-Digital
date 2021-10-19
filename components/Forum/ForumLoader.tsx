import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_FORUM_THREADS } from "../../queries";
import { Text } from "react-native";
import PostListing from "./UI/PostListing";

interface IProps {
  navigation: any;
}

const ForumLoader: FC<IProps> = (props) => {
  const { loading, error, data } = useQuery(GET_FORUM_THREADS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;

  return data.getForumThreads.map((item, i) => {
    return <PostListing data={item} key={i} navigation={props.navigation} />;
  });
};

export default ForumLoader;
