import { gql } from "apollo-boost";

export const GET_AUTH = gql`
  query {
    getAuth {
      id
    }
  }
`;
