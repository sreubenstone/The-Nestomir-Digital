import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useLazyQuery, useApolloClient } from "@apollo/react-hooks";
import { GET_COMMENTS, GET_THREAD } from "../../queries";
import styled from 'styled-components';

interface IProps {
    thread_id: number;
    last: number;
}

const Line = styled.View`
    border-left-width: 0.5px;
    height: 35px;
    margin-left: 20px;
    border-color: #D1D5DA;
`


const LoadMore: FC<IProps> = (props) => {
    const [getComments, { loading, error, data, }] = useLazyQuery(GET_COMMENTS);
    const client = useApolloClient()
    if (loading) return <Text>"Loading..."</Text>;
    if (error) return <Text>Error! ${error.message}</Text>;
    const query = client.readQuery({ query: GET_THREAD, variables: { thread_id: 8 } })
    // can we reconstruct the entire object?

    if (data.newComments) {
        client.writeQuery({
            GET_THREAD,
            data: {
                getThread.replies.edges
            }

        })
    }



    // Get the current to-do list
    /*
        const data = client.readQuery({ query });

const myNewTodo = {
  id: '6',
  text: 'Start using Apollo Client.',
  completed: false,
  __typename: 'Todo',
};

// Write back to the to-do list and include the new item
client.writeQuery({
  query,
  data: {
    todos: [...data.todos, myNewTodo],
  },
  */

    return (
        <View>
            <TouchableOpacity onPress={() => getComments({ variables: { thread_id: props.thread_id, before: props.last } })}>
                <Text>Load previous comments</Text>
            </TouchableOpacity>
            <Line />
        </View>
    )
}

export default LoadMore;
