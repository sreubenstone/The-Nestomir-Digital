import React, { FC, useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from '@apollo/react-hooks';
import { SUBMIT_COMMENT } from "../../queries";
import { View, Text, TouchableOpacity } from "react-native";
import styled from 'styled-components';

interface IProps {
    thread_id: number;
}

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

const AddComment: FC<IProps> = (props) => {
    const [body, setBody] = useState('');
    const [submitComment, { loading: mutationLoading, error: mutationError }] = useMutation(SUBMIT_COMMENT, {
        update(cache, data: any) {
            const replies_fragment: any = cache.readFragment({
                id: `Comment:${props.thread_id}`,
                fragment: gql`
                fragment replies on Comment {
                    id
                    replies {
                        edges {
                             id
                             body
                             user_id
                        }
                    }
                }
              `
            })

            const new_replies_list = [...replies_fragment.replies.edges, data.data.submitComment]
            replies_fragment.replies.edges = new_replies_list
            cache.writeFragment({
                id: `Comment:${props.thread_id}`,
                fragment: gql`
                fragment replies on Comment {
                    id
                    replies {
                        edges {
                             id
                             body
                             user_id
                        }
                    }
                }`,
                data: replies_fragment
            })
        }
    });

    return (
        <View>
            <Line />
            <Divider />
            <Form placeholder="Leave a comment.." multiline value={body} onChangeText={(text) => setBody(text)} />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => {
                    submitComment({ variables: { thread_id: props.thread_id, body: body } })
                    setBody('')
                }}>
                    <View style={{ backgroundColor: '#6382E9', padding: 5, borderRadius: 10, marginTop: 3 }}>
                        <Text style={{ color: '#fff', fontSize: 11 }}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default AddComment;