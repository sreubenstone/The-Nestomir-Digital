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
    margin-bottom: 20px;
`;


const PostListing: FC<IProps> = (props) => {
    const [on, switchToggle] = useState(false);
    return (
        <Container
            on={on}
            onTouchStart={() => switchToggle(!on)}
            onTouchEndCapture={(e) => {
                e.stopPropagation();
                props.navigation.navigate('Thread', { thread_id: props.data.id })
                switchToggle(!on)
            }}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image source={require("../../../assets/images/kid.png")} style={{ width: 30, height: 30, borderRadius: 12 }} />
                    {props.data.audio ? <Image source={require("../../../assets/images/microphone.png")} style={{ width: 15, height: 15, top: 20, right: -3, position: 'absolute' }} /> : null}
                </View>
                <Text style={{ color: "#0195FF", marginTop: 4, marginLeft: 14 }}>{props.data.title}</Text>
            </View>
            <Text style={{ color: "#6B737C", marginTop: 4, marginRight: 10 }}>3m ago</Text>
        </Container>
    )

}

export default PostListing;
