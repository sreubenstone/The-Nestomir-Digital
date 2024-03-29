import React, { FC } from "react";
import { useMutation } from "@apollo/react-hooks";
import { REMOVE_READING_BUDDY } from "../Other/queries";
import { Text, TouchableOpacity } from "react-native";

interface IProps {
  buddy_id: number;
  refetch: () => void;
}

const RemoveBuddy: FC<IProps> = ({ buddy_id, refetch }) => {
  const [removeReadingBuddy, { loading: mutationLoading, error: mutationError }] = useMutation(REMOVE_READING_BUDDY);

  return (
    <TouchableOpacity
      onPress={async () => {
        await removeReadingBuddy({ variables: { buddy_id } });
        refetch();
      }}
    >
      <Text style={{ marginLeft: 10, marginTop: 6.5, fontSize: 8 }}>remove</Text>
    </TouchableOpacity>
  );
};

export default RemoveBuddy;
