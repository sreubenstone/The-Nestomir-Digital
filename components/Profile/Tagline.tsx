import React, { FC, useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from '@apollo/react-hooks';
import { GET_AUTH, SAVE_PROFILE } from "../../queries";


interface IProps {
    tagline: string;
    user_id: number
}

const Tagline: FC<IProps> = ({ tagline, user_id }) => {
    const auth_info = useQuery(GET_AUTH, { fetchPolicy: "cache-only" });
    const [saveProfile, { loading: mutationLoading, error: mutationError, }] = useMutation(SAVE_PROFILE)
    let is_me = false
    if (user_id === auth_info.data.getAuth.id) { is_me = true }
    const [value, onChangeText] = useState(tagline);


    return (
        <View>
            {is_me && <Text style={{ color: 'grey', fontSize: 10, fontWeight: 'bold', marginTop: 15 }}>Short Summary</Text>}
            <TextInput
                value={value}
                onChangeText={text => onChangeText(text)}
                multiline
                maxLength={250}
                editable={is_me}
                style={{ borderColor: 'grey', borderRadius: 3, padding: 7, borderWidth: is_me ? .25 : 0, marginTop: 15, textAlign: is_me ? 'left' : 'center' }}
            />
            {is_me &&
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 10, color: 'grey', marginTop: 5, marginRight: 20 }}>{value.length}/250</Text>
                    <TouchableOpacity onPress={() => saveProfile({ variables: { tagline: value } })}>
                        <Text style={{ fontSize: 10, color: '#0195FF', marginTop: 5 }}>{!mutationLoading ? "Save" : "SAVING"}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )

}

export default Tagline; 