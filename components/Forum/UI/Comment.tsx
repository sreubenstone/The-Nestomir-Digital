import React, { FC, useState } from "react";
import moment from 'moment';
import { View, Text, Image } from "react-native";
import styled from 'styled-components';

interface IProps {
    data: any
}

const CommentCard = styled.View`
    padding: 10px;
    padding-top: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-width: .5px;
    border-color: #D1D5DA;
    background-color: #FFF;
`
const TopCard = styled.View`
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-width: .5px;
    border-color: #D1D5DA;
    background-color: #F6F8FA;
`


const Comment: FC<IProps> = (props) => {
    // TIME STAMPS -- CONVERT TIME STRING TO JS OBECT (JSON.parse), THEN INSERT this object INTO JAVASCRIPT DATE(), THEN PASS THIS Date object INTO MOMENT.
    const converted = JSON.parse(props.data.time.time_stamp)
    const js_date_object = new Date(converted)
    const moment_object = moment(js_date_object)

    return (
        <View>
            <TopCard>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: `${props.data.user.user_avatar}` }} style={{ width: 30, height: 30, borderRadius: 10 }} />
                    <View style={{ marginLeft: 10, alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'gelasio-med', fontSize: 12, color: '#787D9C' }}>{props.data.user.username} commented {moment_object.fromNow()}</Text>
                    </View>
                </View>
            </TopCard>
            <CommentCard>
                <Text style={{ fontFamily: 'gelasio', marginTop: 10, color: '#787D9C' }}>{props.data.body}</Text>
                <Text style={{ fontFamily: 'gelasio', marginTop: 10, color: '#787D9C' }}>👍🏻</Text>
            </CommentCard>
        </View>
    )
}


export default Comment