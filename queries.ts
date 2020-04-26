import { gql } from "apollo-boost";

export const GET_AUTH = gql`
  query {
    getAuth {
      id
      username
    }
  }
`;


export const GET_CHAPTER_THREADS = gql`
  query getChapterThreads($chapter_id: Int) {
    getChapterThreads(chapter_id: $chapter_id) {
      id
      title
    }
  }
`;


export const GET_BOOKMARK = gql`
  query {
    getBookmark {
      id
      user_id
      chapter
      position
    }
  }
`;


export const UPDATE_BOOKMARK = gql`
  mutation updateBookmark($chapter: Int, $position: Int) {
    updateBookmark(chapter: $chapter, position: $position) {
      id
      chapter
      position
    }
  }
`;