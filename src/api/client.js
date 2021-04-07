import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { API_HOST } from '@env';
import { store } from "../store";

const httpLink = createHttpLink({ uri: API_HOST })

const authLink = setContext((_, { headers }) => {
  const token = store.getState().authentication.token

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
