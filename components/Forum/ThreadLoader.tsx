import React, { FC } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { GET_THREAD, GET_COMMENTS, REPLIES_FRAGMENT } from "../Other/queries";
import Post from "./UI/Post";
import { View, Text, TouchableOpacity } from "react-native";
import Comment from "./UI/Comment";
import styled from "styled-components";
import AddComment from "./AddComment";

interface IProps {
  navigation: any;
  thread_id: number;
}

const Line = styled.View`
  border-left-width: 0.5px;
  height: 35px;
  margin-left: 20px;
  border-color: #d1d5da;
`;

const ThreadLoader: FC<IProps> = (props) => {
  const { loading, error, data, client, fetchMore } = useQuery(GET_THREAD, { fetchPolicy: "network-only", variables: { thread_id: props.thread_id } });
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>;
  const oldestReplyCursor = data.getThread.replies.pageInfo.oldestReplyCursor;

  return (
    <View>
      <Post data={data.getThread} navigation={props.navigation} />
      <Line />
      {!oldestReplyCursor ? null : oldestReplyCursor !== data.getThread.replies.edges[0].id ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              fetchMore({
                query: GET_COMMENTS,
                variables: { thread_id: props.thread_id, before: data.getThread.replies.edges[0].id },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  const replies_fragment = client.readFragment({
                    id: `Comment:${props.thread_id}`,
                    fragment: REPLIES_FRAGMENT,
                  });
                  const new_replies_list = [...fetchMoreResult.getComments, ...replies_fragment.replies.edges];
                  replies_fragment.replies.edges = new_replies_list;
                  client.writeFragment({
                    id: `Comment:${props.thread_id}`,
                    fragment: REPLIES_FRAGMENT,
                    data: replies_fragment,
                  });
                },
              });
            }}
          >
            <Text>Load previous comments</Text>
          </TouchableOpacity>
          <Line />
        </View>
      ) : null}

      {data.getThread.replies.edges.map((item, index) => {
        return (
          <View key={index}>
            <Comment data={item} navigation={props.navigation} />
            <Line />
          </View>
        );
      })}
      <AddComment thread_id={props.thread_id} />
    </View>
  );
};

export default ThreadLoader;
