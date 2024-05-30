import { graphql } from "../../gql";

export const verifyUserGoogleTokenQuery = graphql(`
  #graphql
  query verifyGoogleTokenUser($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);
