import React, { FC, useState } from "react";
import { View, Text, Image } from "react-native";
import styled from 'styled-components';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";


interface IProps {
    checkpoint_id: number;
    modal: (id: number) => void;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Icon = styled.Image`
    height: 50px; 
    width: 50px;
    align-self: center;
    margin-bottom: 20px;
    opacity: ${props => props.on ? .2 : 1.0};
`;

const Checkpoint: FC<IProps> = (props) => {
    const [on, switchToggle] = useState(false);
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 50 }}>
            <View onTouchEndCapture={(e) => {
                e.stopPropagation();
                // props.modal(props.checkpoint_id)
                props.navigation.navigate('Thread')

                switchToggle(!on)
            }}
                onTouchStart={() => switchToggle(!on)}
                style={{ width: '100%', backgroundColor: '#fff', borderRadius: 10, marginBottom: 20, padding: 10 }}
            >
                <Text style={{ fontWeight: '500', color: 'orange', marginBottom: 20, textAlign: 'center' }}>Buzzing Threads</Text>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: 0
                    }}
                >
                    <Image
                        source={require("../../assets/images/kid.png")}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 12,
                            // marginLeft: 10

                        }}
                    />
                    {/* <View style={{ backgroundColor: "#5EBA7D", borderRadius: 5 }}>
                        <Text
                            style={{
                                fontSize: 12,
                                color: "white",
                                padding: 2,
                                paddingLeft: 6,
                                paddingRight: 6
                            }}
                        >
                            179
              </Text>
                    </View> */}
                    <Text style={{ color: "#0195FF", marginTop: 4 }}>When Computers Clicked</Text>
                    <Text style={{ color: "#6B737C", marginTop: 4, marginRight: 10 }}>3 min ago</Text>
                </View>

                {/* <Icon source={require("../../assets/images/checkpoint.png")} on={on} /> */}

            </View>
        </View>
    )
}

export default Checkpoint;
