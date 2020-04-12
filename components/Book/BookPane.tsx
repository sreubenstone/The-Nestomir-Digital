import React, { FC } from "react";
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_BOOKMARK } from './../../queries';
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from 'styled-components';
import { ChapterLoaderStyles } from "../../Stylesheet";
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from "react-navigation";

const BackIcon = styled.Image`
 height: 25px; 
 width: 25px; 
 margin-top: 55px; 
 margin-left: 10px;
`;

interface IProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
    overLay: boolean;
    chapter: string;
    bookmark: number;
    screenPos: number;
    diff: number;
    chapter_index: number;
    setBookMark: () => void;
}

const BookPane: FC<IProps> = (props) => {
    const [updateBookmark, { loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_BOOKMARK);
    const { navigation, overLay, screenPos, bookmark, chapter, diff, setBookMark, chapter_index } = props;
    // if (mutationLoading) { console.log('mutation in progress') }
    if (mutationError) { console.log(mutationError) }

    return (
        <View style={[ChapterLoaderStyles.overlaybox, { display: overLay ? "flex" : "none" }]}>
            <TouchableOpacity onPress={() => navigation.navigate('ProgressEntry')}>
                <BackIcon source={require("../../assets/images/back.png")} />
            </TouchableOpacity>
            <Text style={{ marginTop: 62, fontFamily: 'gelasio-bold', marginLeft: 10 }}>The Nestomir, {chapter}</Text>
            <TouchableOpacity onPress={() => {
                setBookMark()
                // when do we want to set it as null?
                if (bookmark !== null && diff < 50) {
                    updateBookmark({ variables: { chapter: null, position: null } })
                    return
                }
                updateBookmark({ variables: { chapter: chapter_index, position: Math.round(screenPos) } });
            }}>
                <Image
                    source={bookmark === null ? require("../../assets/images/bookmark.png") : diff < 50 ? require("../../assets/images/bookmarked.png") : require("../../assets/images/bookmark.png")}
                    style={ChapterLoaderStyles.image}
                />
            </TouchableOpacity>
        </View>
    )
}


export default BookPane