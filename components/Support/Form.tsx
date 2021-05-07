import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import { SAVE_SUPPORT_REQUEST } from "../../queries";
import styled from "styled-components";
import { NavigationParams, NavigationScreenProp, NavigationState } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const FormInput = styled.TextInput`
  border-width: 0.5px;
  border-color: #d1d5da;
  background-color: #fafbfc;
  height: ${(props) => props.height};
  text-align: auto;
  border-radius: 5px;
  padding: 5px;
`;

const ButtonText = styled.Text`
  color: #0195ff;
  text-align: center;
  font-weight: bold;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const placeholder = "Having an issue? Or simply want to share feedback with our team? Fill out the form below. Support will respond within one hour.";

const Form: FC<IProps> = (props) => {
  const [body, setBody] = useState("");
  const [success, setSuccess] = useState(false);

  const [save_Support_Request, { loading: mutationLoading, error: mutationError }] = useMutation(SAVE_SUPPORT_REQUEST, { onCompleted: () => setSuccess(true) });
  if (mutationError) {
    console.log(mutationError);
  }
  return (
    <View>
      <FormInput multiline height="175px" placeholder={placeholder} value={body} onChangeText={(text) => setBody(text)} />
      {success && (
        <View>
          <Text style={{ marginTop: 4 }}>You have successfully submitted your request.</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Forum")}>
            <Text style={{ marginTop: 9, color: "#0195FF" }}>Please return to the forum</Text>
          </TouchableOpacity>
        </View>
      )}
      {!success && (
        <TouchableOpacity
          style={{ marginTop: 8 }}
          onPress={() => {
            if (!body) {
              return;
            }
            save_Support_Request({ variables: { body } });
            setBody("");
          }}
        >
          <ButtonText>SUBMIT</ButtonText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Form;
