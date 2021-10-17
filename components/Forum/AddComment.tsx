import React, { FC, useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { SUBMIT_COMMENT, REPLIES_FRAGMENT } from "../../queries";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styled from "styled-components";

interface IProps {
  thread_id: number;
}

const Line = styled.View`
  border-left-width: 0.5px;
  height: 35px;
  margin-left: 20px;
  border-color: #d1d5da;
`;

const Divider = styled.View`
  border-top-width: 0.5px;
  border-color: #d1d5da;
  height: 10px;
  margin-left: 7px;
  margin-right: 7px;
`;
const Form = styled.TextInput`
  border-width: 0.5px;
  border-color: #d1d5da;
  background-color: #fafbfc;
  height: 70px;
  text-align: auto;
  border-radius: 5px;
  padding: 5px;
`;

const AddComment: FC<IProps> = (props) => {
  const [body, setBody] = useState("");
  const [submitComment, { loading: mutationLoading, error: mutationError }] = useMutation(SUBMIT_COMMENT, {
    update(cache, data: any) {
      const replies_fragment: any = cache.readFragment({
        id: `Comment:${props.thread_id}`,
        fragment: REPLIES_FRAGMENT,
      });

      const new_replies_list = [...replies_fragment.replies.edges, data.data.submitComment];
      replies_fragment.replies.edges = new_replies_list;
      cache.writeFragment({
        id: `Comment:${props.thread_id}`,
        fragment: REPLIES_FRAGMENT,
        data: replies_fragment,
      });
    },
  });

  return (
    <View>
      <Line />
      <Divider />
      <Form placeholder="Leave a comment.." multiline value={body} onChangeText={(text) => setBody(text)} style={{ textAlignVertical: "top" }} />
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={() => {
            if (!body) {
              return;
            }
            submitComment({ variables: { thread_id: props.thread_id, body: body } });
            setBody("");
          }}
        >
          <View style={{ backgroundColor: "#6382E9", padding: 5, borderRadius: 10, marginTop: 3 }}>
            <Text style={{ color: "#fff", fontSize: 11 }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddComment;
