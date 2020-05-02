import React, { FC, useState } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";

import styled from 'styled-components';

const Line = styled.View`
    border-left-width: 0.5px;
    height: 35px;
    margin-left: 20px;
    border-color: #D1D5DA;
`

const Divider = styled.View`
    border-top-width: 0.5px;
    border-color: #D1D5DA;
    height: 10px;
    margin-left: 7px;
    margin-right: 7px;
`
const Form = styled.TextInput`
    border-width: .5px;
    border-color: #D1D5DA;
    background-color: #FAFBFC;
    height: 70px;
    text-align: auto;
    border-radius: 5px;
    padding: 5px;
`

const AddComment: FC = (props) => {
    return (
        <View>
            <Line />
            <Divider />
            <Form placeholder="Leave a comment.." multiline />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#6382E9', padding: 5, borderRadius: 10, marginTop: 3 }}>
                        <Text style={{ color: '#fff', fontSize: 11 }}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}


export default AddComment