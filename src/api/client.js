import { setContext } from "@apollo/client/link/context";
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { API_HOST } from '@env';
import AsyncStorage from "@react-native-community/async-storage";

const httpLink = createHttpLink({ uri: API_HOST })

const authLink = setContext((_, { headers }) => {
  return AsyncStorage.getItem('api_token').then(token => ({
    headers: {
      ...headers,
      authorization: `Bearer ${token}`
    }
  }))
})

const defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions
});
