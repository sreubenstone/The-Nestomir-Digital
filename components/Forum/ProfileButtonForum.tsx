import React, { FC } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTH } from "../../queries";
import { TouchableOpacity, Text, Image } from "react-native";

import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";


interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


const ProfileButtonForum: FC<IProps> = (props) => {
    const { loading, error, data } = useQuery(GET_AUTH, { fetchPolicy: "cache-only" });
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error! ${error.message}</Text>;
    console.log('getAuthProfile:', data)

    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile', { user_id: data.getAuth.id })}>
            <Image source={{ uri: `${data.getAuth.user_avatar}` }} style={{ width: 34, height: 34, borderRadius: 17, }} />
        </TouchableOpacity>
    )
}

export default ProfileButtonForum;
