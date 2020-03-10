import React, { Component } from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image } from "react-native";
import styled from 'styled-components';

interface IProps {
    modal: (id?: number) => void;
    id: number;
}

const ModalParent = styled.View`
	flex: 1;
    background-color: rgba(0,0,0,0.7);
    align-items: center;
    justify-content: center;
`;

const ModalContainer = styled.View`
	width: 96%;
    height: 90%;
    border-color: #ccc;
    border-width: 1px;
    border-style: solid;
    background-color: white;
    padding: 0px;
    border-radius: 4px;
`;

const BG = styled.ImageBackground`
    width: 100%;
    height: 100%;
`;

const ForumTitle = styled.Text`
	font-size: 18px;
    font-family: "gelasio";
    text-align: center;
    margin-top: 10px;
    margin-bottom: 1px;
`;

const Card = styled.View`
    background-color: #fff;
    height: 120px;
    width: 97%;
    border-radius: 13px;
    border-width: .5px;
    border-color: #E9FCFB;
    padding: 10px;
    /*box-shadow:  #F7F8FA;*/
`;


export default class ForumModal extends Component<IProps> {

    render() {
        const { modal, id } = this.props
        return (
            <ModalParent>
                <ModalContainer>
                    <View style={{ height: "21%" }}>
                        <BG source={require("../../assets/images/dragon.png")} />
                    </View>
                    <ForumTitle>Story Checkpoint</ForumTitle>
                    <Text style={{ marginBottom: 25, textAlign: 'center' }}>Story | Tech | Career </Text>
                    <Text style={{ marginBottom: 10, textAlign: 'center' }}>1,459 online</Text>
                    <Text style={{ marginBottom: 25, }}>Trending</Text>

                    <Card>
                        <Image source={{
                            uri: `https://miro.medium.com/max/3150/1*Umap0mwgh8y0eVQnZ9xTXg.jpeg`
                        }} style={{ height: 30, width: 30, borderRadius: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Thinking About The DOM</Text>
                        <Text style={{ fontSize: 13, fontWeight: '200' }}>Jason Rorigues -- Mentor</Text>
                        <Text style={{ fontSize: 13, fontWeight: '400' }}>13 replies ></Text>
                    </Card>
                    <Card>
                        <Image source={{
                            uri: `https://image.freepik.com/free-photo/creative-french-no-man-guy_1194-8063.jpg`
                        }} style={{ height: 30, width: 30, borderRadius: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Data Structures in Industry</Text>
                        <Text style={{ fontSize: 13, fontWeight: '200' }}>Jason Rorigues</Text>
                        <Text style={{ fontSize: 13, fontWeight: '400' }}>13 replies ></Text>
                    </Card>
                    <Card>
                        <Image source={{
                            uri: `https://www.superprof.com.au/images/teachers/teacher-home-smart-indian-management-student-teaches-english-for-creative-expression-fun-and-easy.jpg`
                        }} style={{ height: 30, width: 30, borderRadius: 15 }} />
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Who Was Iglod The Wise?</Text>
                        <Text style={{ fontSize: 13, fontWeight: '200' }}>Jason Rorigues</Text>
                        <Text style={{ fontSize: 13, fontWeight: '400' }}>13 replies ></Text>
                    </Card>
                    <Text style={{ fontWeight: '300', marginTop: 30, textAlign: 'center' }}>POST THREAD</Text>
                    <TouchableOpacity onPress={() => modal()}>
                        <Text style={{ marginTop: 900 }}>[x]</Text>
                    </TouchableOpacity>
                </ModalContainer>
            </ModalParent>
        );
    }
}
