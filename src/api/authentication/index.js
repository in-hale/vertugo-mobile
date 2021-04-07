import { client } from "../client";
import { gql } from '@apollo/client';

export const signInUser = (credentials) => {
  const variables = { credentials }
  const mutation = gql`
    mutation SignInUser($credentials: AUTH_CREDENTIALS) {
      signInUser(
        input: {
          credentials: $credentials
        }
      ) {
        user {
          id
          login
          email
        }
        token
      }
    }
  `

  return client.mutate({
    mutation, variables
  })
}

