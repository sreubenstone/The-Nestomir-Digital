import React, { FC, useState } from "react";
import { View } from "react-native";

import ForumCard from './ForumCard';
import styled from 'styled-components';


interface IProps {
    data: any
}

const Center = styled.View`
	flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`;



const ForumMap: FC<IProps> = (props) => {
    return (
        <Center>
            <View style={{ width: '97%' }}>
                {props.data.map((item, i) => {
                    return <ForumCard data={item} key={i} />
                })}
            </View>
        </Center>
    )
}

export default ForumMap;
