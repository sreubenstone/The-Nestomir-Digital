import React, { FC, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_READING_BUDDY } from "../../queries";
import { Text, View, TouchableOpacity } from "react-native";
import styled from "styled-components";

interface IProps {
  refetch: () => void;
}

const Form = styled.TextInput`
  border-width: 0.5px;
  border-color: #d1d5da;
  background-color: #fafbfc;
  height: 35px;
  text-align: auto;
  border-radius: 5px;
  padding: 5px;
`;

const ErrorText = styled.Text`
  color: red;
  font-weight: 300;
  font-size: 10px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 8px;
`;

const ReaderModal: FC<IProps> = ({ refetch }) => {
  const [body, setBody] = useState("");
  const [addReadingBuddy, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_READING_BUDDY);

  return (
    <View>
      <Form placeholder="insert secret reader code here" onChangeText={(text) => setBody(text)} value={body} />
      {mutationError ? <ErrorText>{mutationError.message}</ErrorText> : null}
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={async () => {
            await addReadingBuddy({ variables: { secret_code: body } });
            setBody("");
            refetch();
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

export default ReaderModal;
