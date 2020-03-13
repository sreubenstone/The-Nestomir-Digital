import React, { FC, useState } from "react";
import { View } from "react-native";
import styled from 'styled-components';

interface IProps {
    checkpoint_id: number;
    modal: (id: number) => void;
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
        <View onTouchEndCapture={(e) => {
            e.stopPropagation();
            props.modal(props.checkpoint_id)
            switchToggle(!on)
        }}
            onTouchStart={() => switchToggle(!on)}
        >
            <Icon source={require("../../assets/images/checkpoint.png")} on={on} />
        </View>
    )
}

export default Checkpoint;
