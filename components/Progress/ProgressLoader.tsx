import React, { FC, } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_STORY_PROGRESS } from "../../queries";
import { Text } from "react-native";
import ProgressContainer from "./ProgressContainer";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";

interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const ProgressLoader: FC<IProps> = (props) => {
    const { loading, error, data } = useQuery(GET_STORY_PROGRESS);
    if (loading) return <Text>"Loading..."</Text>;
    if (error) return <Text>Error! ${error.message}</Text>;
    console.log("hitting")
    return (
        <ProgressContainer navigation={props.navigation} data={data} />
    )
}

export default ProgressLoader