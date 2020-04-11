import { gql } from "apollo-boost";

export const GET_AUTH = gql`
  query {
    getAuth {
      id
      username
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