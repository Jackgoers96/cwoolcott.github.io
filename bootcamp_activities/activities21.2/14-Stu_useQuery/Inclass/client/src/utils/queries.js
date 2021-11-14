import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
  # TODO: Add a query called 'getThoughts' that returns a thought's _id, thoughtText, thoughtAuthor, and createdAt fields
    # create a GraphQL query to be executed by Apollo Client
    query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }

`;
