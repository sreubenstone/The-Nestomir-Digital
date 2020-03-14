import React, { FC } from "react";
import { View, Image, Text } from "react-native";
import styled from 'styled-components';

interface IProps {
    data: any
}

const Card = styled.View`
    background-color: #fff;
    height: 120px;
    /* width: 97%; */
    border-radius: 13px;
    border-width: .5px;
    border-color: #E9FCFB;
    padding: 10px;
    box-shadow: 5px 5px #0066ff;
    margin-bottom: 30px;
`;

const Container = styled.View`
    flex-direction: row;
`;

const ForumCard: FC<IProps> = (props) => {
    const { data } = props
    return (
        <Card>
            <Container>
                <Image source={{ uri: data.avatar }} style={{ height: 90, width: 90, borderRadius: 45 }} />
                <View style={{ marginLeft: 18 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{data.title}</Text>
                    <Text style={{ fontSize: 13, fontWeight: '200' }}>{data.first_name} {data.last_name}</Text>
                    <Text style={{ fontSize: 13, fontWeight: '400' }}>replies: {data.replies}</Text>
                    <Text style={{ fontSize: 13, fontWeight: '400' }}>#tech</Text>

                </View>
            </Container>
        </Card>
    )
}

export default ForumCard;
