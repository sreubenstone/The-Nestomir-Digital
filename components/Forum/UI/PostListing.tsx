import React, { FC, useState } from "react";
import { View, Text, Image } from "react-native";
import styled from 'styled-components';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";

interface IProps {
    data: any;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    opacity: ${props => props.on ? .2 : 1.0};
`;


const PostListing: FC<IProps> = (props) => {
    const [on, switchToggle] = useState(false);
    return (
        <Container
            on={on}
            onTouchStart={() => switchToggle(!on)}
            onTouchEndCapture={(e) => {
                e.stopPropagation();
                props.navigation.navigate('Thread')
                switchToggle(!on)
            }}>
            <Image source={require("../../../assets/images/kid.png")} style={{ width: 30, height: 30, borderRadius: 12 }} />
            <Text style={{ color: "#0195FF", marginTop: 4 }}>{props.data.title}</Text>
            <Text style={{ color: "#6B737C", marginTop: 4, marginRight: 10 }}>3m ago</Text>
        </Container>
    )

}

export default PostListing;
