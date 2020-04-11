import { gql } from "apollo-boost";

export const GET_AUTH = gql`
  query {
    getAuth {
      id
      username
    }
  }
`;


export const GET_STORY_PROGRESS = gql`
  query {
    getStoryProgress {
      id
      user_id
      read_to
      bookmark
    }
  }
`;

