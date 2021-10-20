import React, { FC } from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_BOOKMARK } from "./../../queries";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { ChapterLoaderStyles } from "../../Stylesheet";

const BackIcon = styled.Image`
  height: 25px;
  width: 25px;
  margin-top: 55px;
  margin-left: 15px;
`;

interface IProps {
  navigation: any;
  overLay: boolean;
  chapter: string;
  bookmark: number;
  screenPos: number;
  diff: number;
  chapter_index: number;
  progress_count: number;
  setBookMark: () => void;
}

const BookPane: FC<IProps> = (props) => {
  const [updateBookmark, { loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_BOOKMARK);
  const { navigation, overLay, screenPos, bookmark, chapter, diff, setBookMark, chapter_index, progress_count } = props;
  // if (mutationLoading) { console.log('mutation in progress') }
  if (mutationError) {
    console.log(mutationError);
  }

  return overLay ? (
    <View style={ChapterLoaderStyles.overlaybox}>
      <TouchableOpacity onPress={() => navigation.navigate("ProgressEntry")}>
        <BackIcon source={require("../../assets/images/back.png")} />
      </TouchableOpacity>
      <Text style={{ marginTop: 62, fontFamily: "gelasio-bold", marginLeft: 8 }}>The Nestomir, {chapter}</Text>
      <TouchableOpacity
        onPress={() => {
          setBookMark();
          // when do we want to set it as null?
          if (bookmark !== null && diff < 50) {
            updateBookmark({ variables: { chapter: null, position: null, percentage: null } });
            return;
          }
          updateBookmark({ variables: { chapter: chapter_index, position: Math.round(screenPos), percentage: progress_count * 100 } });
        }}
      >
        <Image source={bookmark === null ? require("../../assets/images/bookmark.png") : diff < 50 ? require("../../assets/images/bookmarked.png") : require("../../assets/images/bookmark.png")} style={ChapterLoaderStyles.image} />
      </TouchableOpacity>
    </View>
  ) : null;
};

export default BookPane;
