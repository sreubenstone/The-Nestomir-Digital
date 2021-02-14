import React, { FC, useState } from "react";
import { View, Text, Image } from "react-native";
import styled from 'styled-components';
import moment from 'moment';
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


    // TIME STAMPS -- CONVERT TIME STRING TO JS OBECT (JSON.parse), THEN INSERT this object INTO JAVASCRIPT DATE(), THEN PASS THIS Date object INTO MOMENT.
    const converted = JSON.parse(props.data.time.time_stamp)
    const js_date_object = new Date(converted)
    const moment_object = moment(js_date_object)

    return (
        <Container
            on={on}
            onTouchStart={() => switchToggle(!on)}
            onTouchEndCapture={(e) => {
                e.stopPropagation();
                props.navigation.navigate('Thread', { thread_id: props.data.id, title: props.data.title })
                switchToggle(!on)
            }}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image source={{ uri: `${props.data.user.user_avatar}` }} style={{ width: 30, height: 30, borderRadius: 12 }} />
                    {props.data.audio ? <Image source={require("../../../assets/images/microphone.png")} style={{ width: 15, height: 15, top: 20, right: -3, position: 'absolute' }} /> : null}
                </View>
                <Text style={{ color: "#0195FF", marginTop: 4, marginLeft: 14 }}>{props.data.title}</Text>
            </View>
            <Text style={{ color: "#6B737C", marginTop: 4, marginRight: 10 }}>{moment_object.fromNow()}</Text>
        </Container>
    )

}

export default PostListing;
