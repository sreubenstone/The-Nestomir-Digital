import React, { Component } from "react";
import { Audio } from "expo-av";
import { View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";

interface IProps {
  sound_file: string;
}

const SoundBox = styled.View`
  border-radius: 6px;
  border-width: 0.5px;
  border-color: #d1d5da;
  padding: 10px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: center;
`;

export default class Sound extends Component<IProps> {
  state = {
    playingStatus: "stopped",
  };

  playbackInstance = null;

  componentDidMount = async () => {
    const soundObject = new Audio.Sound();
    soundObject.setOnPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
    this.playbackInstance = soundObject;
    try {
      if (this.props.sound_file === "whatiscode") {
        await this.playbackInstance.loadAsync(require("../../assets/sound/whatiscode.mp3"));
      }

      if (this.props.sound_file === "truthyfalsey") {
        await this.playbackInstance.loadAsync(require("../../assets/sound/truthyfalsey.mp3"));
      }

      if (this.props.sound_file === "opensource") {
        await this.playbackInstance.loadAsync(require("../../assets/sound/opensource.mp3"));
      }

      if (this.props.sound_file === "jupyter") {
        await this.playbackInstance.loadAsync(require("../../assets/sound/jupyter.mp3"));
      }
    } catch (error) {
      console.log("sound load error");
    }
  };

  _onPlaybackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.didJustFinish) {
      // The player has just finished playing and will stop. Maybe you want to play something else?
      this.stop();
    }
  };

  soundControl = async () => {
    const { playingStatus } = this.state;
    try {
      if (playingStatus === "stopped" || playingStatus === "paused") {
        await this.playbackInstance.playAsync();
        this.setState({ playingStatus: "playing" });
      } else {
        await this.playbackInstance.pauseAsync();
        this.setState({ playingStatus: "paused" });
      }
    } catch (error) {
      console.log("error in sound play,", error);
    }
  };

  stop = async () => {
    try {
      await this.playbackInstance.stopAsync();
      this.setState({ playingStatus: "stopped" });
    } catch (error) {
      console.log("error in sound play");
    }
  };

  componentWillUnmount() {
    this.playbackInstance.unloadAsync();
    //  Check Your Console To verify that the above line is working
    // console.log('unmount');
  }

  render() {
    const { playingStatus } = this.state;
    return (
      <SoundBox>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", width: "100%" }}>
          <TouchableOpacity onPress={() => this.soundControl()}>
            <Image source={playingStatus === "playing" ? require("../../assets/images/pause.png") : require("../../assets/images/play.png")} style={{ width: 30, height: 30, marginLeft: 35 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.stop()}>
            <Image source={require("../../assets/images/stop.png")} style={{ width: 26, height: 26, marginTop: 2, marginRight: 35 }} />
          </TouchableOpacity>
        </View>
      </SoundBox>
    );
  }
}
