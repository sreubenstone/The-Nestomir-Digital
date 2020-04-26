import React, { Component } from "react";
import { Audio } from 'expo-av';
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import styled from 'styled-components';


const SoundBox = styled.View`
    border-radius: 6px;
    border-width: 0.5px;
    border-color: #D1D5DA;
    padding: 10px;
    margin-top: 10px;
    flex-direction: row;
    justify-content: center;
`

export default class Sound extends Component {

    state = {
        playingStatus: "stopped",
    };

    playbackInstance = null;

    componentDidMount = async () => {
        const soundObject = new Audio.Sound();
        soundObject.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
        this.playbackInstance = soundObject
        try {
            await this.playbackInstance.loadAsync(require('../../assets/sound/testsound.mp3'));

        } catch (error) {
            console.log('sound load error')
        }
    }

    _onPlaybackStatusUpdate = playbackStatus => {
        if (playbackStatus.didJustFinish) {
            // The player has just finished playing and will stop. Maybe you want to play something else?
            this.stop()
        }

    };

    soundControl = async () => {
        const { playingStatus } = this.state
        try {
            if (playingStatus === 'stopped' || playingStatus === 'paused') {
                await this.playbackInstance.playAsync();
                this.setState({ playingStatus: 'playing' })
            } else {
                await this.playbackInstance.pauseAsync();
                this.setState({ playingStatus: 'paused' })
            }

        } catch (error) {
            console.log('error in sound play')
        }
    }

    stop = async () => {
        try {
            await this.playbackInstance.stopAsync()
            this.setState({ playingStatus: "stopped" })
        } catch (error) {
            console.log('error in sound play')
        }
    }

    componentWillUnmount() {
        this.playbackInstance.unloadAsync();
        //  Check Your Console To verify that the above line is working
        console.log('unmount');
    }



    render() {
        const { playingStatus } = this.state
        return (
            <SoundBox>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => this.soundControl()}>
                        <Image source={playingStatus === 'playing' ? require("../../assets/images/pause.png") : require("../../assets/images/play.png")} style={{ marginRight: 20, width: 30, height: 30 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.stop()}>
                        <Image source={require("../../assets/images/stop.png")} style={{ width: 26, height: 26, marginTop: 2 }} />
                    </TouchableOpacity>
                </View>
            </SoundBox>
        )
    }


}