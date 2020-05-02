import { gql } from "apollo-boost";

export const GET_AUTH = gql`
  query {
    getAuth {
      id
      username
    }
  }
`;

export const GET_THREAD = gql`
query getThread ($thread_id: Int){
  getThread (thread_id: $thread_id) {
    id
    title
    body
    replies {
      edges {
          id
          body
          user_id
      }
      pageInfo {
        oldestReplyCursor
      }
    }
  }
}
`;


export const GET_COMMENTS = gql`
query getComments ($thread_id: Int, $before: Int) {
  getComments (thread_id: $thread_id, before: $before ) {
    id
    body
  }
}
`;

export const GET_FORUM_THREADS = gql`
  query {
    getForumThreads {
      id
      title
      audio
    }
  }
`;


export const GET_CHAPTER_THREADS = gql`
  query getChapterThreads($chapter_id: Int) {
    getChapterThreads(chapter_id: $chapter_id) {
      id
      title
      audio
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