import React, { Component } from "react";
import { View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components';
import Sound from './Sound';

const Container = styled.ScrollView`
    height: 100%;
    width: 100%;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    z-index: 10;
    position: absolute;
    top: 0%;
    padding-top: 6px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #FAFBFC; 
`

const ContainerStyle = {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    zIndex: 10,
    position: 'absolute',
    top: '0%',
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FAFBFC'
}


const Form = styled.TextInput`
    border-width: .5px;
    border-color: #D1D5DA;
    background-color: #FAFBFC;
    height: 70px;
    text-align: auto;
    border-radius: 5px;
    padding: 5px;

`

const CommentCard = styled.View`
    padding: 10px;
    padding-top: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-width: .5px;
    border-color: #D1D5DA;
    background-color: #FFF;
`

const Test = styled.View`
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-width: .5px;
    border-color: #D1D5DA;
    background-color: #F6F8FA;
    margin-top: 7.5px;
`

const Test1 = styled.View`
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-width: .5px;
    border-color: #D1D5DA;
    background-color: #F6F8FA;
`

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

export default class Thread extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'When Computers Clicked',
            headerLeft: null,
        }
    }





    render() {
        return (
            <View style={{ height: "100%" }}>
                <View style={{ height: "21%", flexDirection: 'column', alignItems: 'center', }}>
                    <ImageBackground source={require("../../assets/images/dragon.png")} style={{ width: "100%", height: "100%", flexDirection: 'row' }} >
                        <Text style={{ textAlign: 'center', fontFamily: 'gelasio', color: '#fff', }}>Forum</Text>
                    </ImageBackground>
                </View>

                <KeyboardAwareScrollView
                    style={ContainerStyle}
                    resetScrollToCoords={null}
                    scrollEnabled
                >
                    <Test>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require("../../assets/images/kid.png")} style={{ width: 50, height: 50, borderRadius: 20 }} />
                            <View style={{ marginLeft: 10, alignSelf: 'center' }}>
                                <Text style={{ fontFamily: 'gelasio-med', fontSize: 12, color: '#787D9C' }}>Robert lancer Posted</Text>
                            </View>
                        </View>
                    </Test>
                    <CommentCard>
                        <Text style={{ fontSize: 20, fontFamily: 'gelasio', marginTop: 10 }}>When Computers Clicked</Text>
                        <Text style={{ fontFamily: 'gelasio', marginTop: 10, color: '#787D9C' }}>I was coding on my computer one day and I realized that I didn't really understand what was happening under the hood. A computer is an electronic machine that processes information—in other words, an information processor: it takes in raw information (or data) at one end, stores it until it's ready to work on it, chews and crunches it for a bit, then spits out the results at the other end. All these processes have a name. Taking in information is called input, storing information is better known as memory (or storage), chewing information is also known as processing, and spitting out results is called output.</Text>
                        <Sound />
                        <Text style={{ fontFamily: 'gelasio', marginTop: 10, color: '#787D9C' }}>👍🏻</Text>
                    </CommentCard>
                    <Line />
                    <Test1>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={require("../../assets/images/smartkid.png")} style={{ width: 30, height: 30, borderRadius: 10 }} />
                            <View style={{ marginLeft: 10, alignSelf: 'center' }}>
                                <Text style={{ fontFamily: 'gelasio-med', fontSize: 12, color: '#787D9C' }}>Samguino commented 3 min ago</Text>
                            </View>
                        </View>
                    </Test1>
                    <CommentCard>
                        <Text style={{ fontFamily: 'gelasio', marginTop: 10, color: '#787D9C' }}>I was coding on my computer one day and I realized that I didn't really understand what was happening under the hood. </Text>
                        <Text style={{ fontFamily: 'gelasio', marginTop: 10, color: '#787D9C' }}>👍🏻</Text>
                    </CommentCard>
                    <Line />
                    <Divider />
                    <Form placeholder="Leave a comment.." multiline />
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity>
                            <View style={{ backgroundColor: '#6382E9', padding: 5, borderRadius: 10, marginTop: 3 }}>
                                <Text style={{ color: '#fff', fontSize: 11 }}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20 }} />
                </KeyboardAwareScrollView>
            </View>
        )
    }
}