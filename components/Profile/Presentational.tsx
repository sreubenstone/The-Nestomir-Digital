import React, { FC } from "react";
import Config from '../../config.js'
import * as SecureStore from "expo-secure-store";
import { Text, View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { ProgressStyles, GlobalStyles } from "../../Stylesheet";
import PostListing from '../Forum/UI/PostListing';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";


interface IProps {
    data: any
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Presentational: FC<IProps> = (props) => {
    return (
        <View style={{ height: "100%" }}>
            <View style={{ height: "21%" }}>
                <ImageBackground source={require("../../assets/images/sky.png")} style={{ width: "100%", height: "100%" }} />
            </View>
            <View style={ProgressStyles.container}>
                <Image source={{ uri: `${props.data.user_avatar}` }} style={{ width: 125, height: 125, borderRadius: 9, position: "absolute", top: -74, left: "37.5%" }} />
                <Text style={{ textAlign: "center", marginTop: 50, fontWeight: "800", fontSize: 19 }}>{props.data.username}</Text>
                <Text style={{ textAlign: "center", fontSize: 10, marginTop: 3 }}>Profile tagline will go here.</Text>
                <View
                    style={[
                        GlobalStyles.flexRowSpace,
                        {
                            backgroundColor: "#fff",
                            marginTop: 20,
                            height: 70,
                            borderRadius: 13,
                            padding: 10,
                            shadowOffset: { width: 5, height: 10 },
                            shadowColor: "#F7F8FA",
                            shadowOpacity: 1
                        }
                    ]}
                >
                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16, marginBottom: 3 }}>{!props.data.bookmark.chapter ? 'Prologue' : props.data.bookmark.chapter}</Text>
                        <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "100" }}>Current Chapter</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 16, marginBottom: 3 }}>{props.data.threads.length}</Text>
                        <Text style={{ textAlign: "center", fontSize: 11, fontWeight: "100" }}>Forum Activity</Text>
                    </View>
                </View>
                <Text style={{ marginTop: 20, fontWeight: "800", fontSize: 17, marginBottom: 15 }}>Forum Activity</Text>
                {!props.data.threads ? null : props.data.threads.map((item, i) => {
                    return <PostListing data={item} navigation={props.navigation} key={i} />
                })}

                {!Config.env ?
                    <TouchableOpacity onPress={() => SecureStore.deleteItemAsync('jwt')}>
                        <Text>Log out (dev)</Text>
                    </TouchableOpacity> : null}

            </View>
        </View>
    )
}

export default Presentational;
