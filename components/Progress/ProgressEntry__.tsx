import React, { Component } from "react";
import ProgressLoader from "./ProgressLoader";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";

interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


export default class ProgressEntry extends Component<IProps> {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (<ProgressLoader navigation={this.props.navigation} />)
    }


}