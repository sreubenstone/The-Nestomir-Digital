import React, { FC, useState } from "react";
import Sound from './../Sound';
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
    margin-top: 7.5px;
`

const Post: FC<IProps> = (props) => {
    // TIME STAMPS -- CONVERT TIME STRING TO JS OBECT (JSON.parse), THEN INSERT this object INTO JAVASCRIPT DATE(), THEN PASS THIS Date object INTO MOMENT.
    const converted = JSON.parse(props.data.time.time_stamp)
    const js_date_object = new Date(converted)
    const moment_object = moment(js_date_object)


    return (
        <View>
            <TopCard>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require("../../../assets/images/kid.png")} style={{ width: 50, height: 50, borderRadius: 20 }} />
                    <View style={{ marginLeft: 10, alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'gelasio-med', fontSize: 12, color: '#787D9C' }}>{props.data.user.username} posted {moment_object.fromNow()}</Text>
                    </View>
                </View>
            </TopCard>
            <CommentCard>
                <Text style={{ fontSize: 20, fontFamily: 'gelasio', marginTop: 10 }}>{props.data.title}</Text>
                <Text style={{ fontFamily: 'gelasio', marginTop: 10, color: '#787D9C' }}>{props.data.body}</Text>
                <Sound />
                <Text style={{ fontFamily: 'gelasio', marginTop: 10, color: '#787D9C' }}>👍🏻</Text>
            </CommentCard>
        </View>
    )

}


export default Post