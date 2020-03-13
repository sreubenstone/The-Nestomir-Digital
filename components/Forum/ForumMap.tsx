import React, { FC, useState } from "react";
import ForumCard from './ForumCard';
import styled from 'styled-components';


interface IProps {
    data: any
}

const Center = styled.View`
	flex-direction: row;
    justify-content: center;
`;



const ForumMap: FC<IProps> = (props) => {
    return (
        <Center>
            {props.data.map((item, i) => {
                return <ForumCard data={item} key={i} />
            })}
        </Center>
    )
}

export default ForumMap;
