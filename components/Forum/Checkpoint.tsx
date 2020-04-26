import React, { FC, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_CHAPTER_THREADS } from "../../queries";
import { View, Text, Image } from "react-native";
import PostListing from "./UI/PostListing"
import styled from 'styled-components';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";


interface IProps {
    chapter_index: number;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Container = styled.View`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 75px;
    padding: 10px;
    border-width: 0.5px;
    border-color: #D1D5DA;
`;

const Header = styled.Text`
    font-weight: 500;
    color: orange;
    margin-bottom: 20px;
    text-align: center;
`;

const Checkpoint: FC<IProps> = (props) => {
    const { loading, error, data } = useQuery(GET_CHAPTER_THREADS, { variables: { chapter_id: props.chapter_index } });
    if (loading) return <Text>"Loading..."</Text>;
    if (error) return <Text>Error! ${error.message}</Text>;

    return (
        <Container>
            <Header>Buzzing Threads</Header>
            {data.getChapterThreads.map((item, i) => {
                return <PostListing data={item} key={i} navigation={props.navigation} />
            })}
        </Container>
    )
}

export default Checkpoint;
