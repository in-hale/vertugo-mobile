import { gql } from '@apollo/client';
import { client } from '../client';

export const signInUser = (credentials) => {
  const variables = { credentials };
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
  `;

  return client.mutate({
    mutation, variables,
  });
};

export const signUpUser = ({ login, ...credentials }) => {
  const variables = { credentials, login };
  const mutation = gql`
    mutation SignUpUser($credentials: AUTH_CREDENTIALS!, $login: String!) {
      signUpUser(
        input: {
          credentials: $credentials,
          login: $login
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
  `;

  return client.mutate({
    mutation, variables,
  });
};
