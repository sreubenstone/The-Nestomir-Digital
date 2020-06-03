import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_THREAD, GET_COMMENTS } from "../../queries";
import Post from './UI/Post';
import { View, Text } from "react-native";
import Comment from './UI/Comment';
import styled from 'styled-components';
import AddComment from './AddComment';
import LoadMore from './LoadMore';


interface IProps {
    thread_id: number;
}

const Line = styled.View`
    border-left-width: 0.5px;
    height: 35px;
    margin-left: 20px;
    border-color: #D1D5DA;
`

const ThreadLoader: FC<IProps> = (props) => {
    const { loading, error, data } = useQuery(GET_THREAD, { variables: { thread_id: props.thread_id } });
    if (loading) return <Text>"Loading..."</Text>;
    if (error) return <Text>Error! ${error.message}</Text>;
    const oldestReplyCursor = data.getThread.replies.pageInfo.oldestReplyCursor
    console.log(oldestReplyCursor, data.getThread.replies.edges[0].id)
    return (
        <View>
            <Post data={data.getThread} />
            <Line />
            {(oldestReplyCursor !== data.getThread.replies.edges[0].id) ? <LoadMore thread_id={props.thread_id} last={data.getThread.replies.edges[0].id} /> : null}
            {data.getThread.replies.edges.map((item, index) => {
                return <View key={index}>
                    <Comment data={item} />
                    <Line />
                </View>
            })}
            <AddComment thread_id={props.thread_id} />
        </View>
    )
}

export default ThreadLoader;
