import React, { FC } from "react";
import { gql } from "apollo-boost";
import { View, Text, TouchableOpacity } from "react-native";
import { useLazyQuery, useApolloClient } from "@apollo/react-hooks";
import { GET_COMMENTS } from "../../queries";
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
    if (data) {
        const replies_fragment = client.readFragment({
            id: `Comment:${props.thread_id}`,
            fragment: gql`
            fragment fraggi on Comment {
                id
                replies {
                    edges {
                         id
                         body
                         user_id
                    }
                }
            }
          `
        })

        const new_replies_list = [...data.getComments, ...replies_fragment.replies.edges]
        replies_fragment.replies.edges = new_replies_list

        client.writeFragment({
            id: `Comment:${props.thread_id}`,
            fragment: gql`
            fragment fraggi on Comment {
                id
                replies {
                    edges {
                         id
                         body
                         user_id
                    }
                }
            }`,
            data: replies_fragment
        }
        )
    }

    return (
        <View>
            <TouchableOpacity onPress={() => { getComments({ variables: { thread_id: props.thread_id, before: props.last } }) }}>
                <Text>Load previous comments</Text>
            </TouchableOpacity>
            <Line />
        </View>
    )
}

export default LoadMore;
