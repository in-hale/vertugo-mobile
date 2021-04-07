import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_HOST } from '@env';

export const client = new ApolloClient({
  uri: API_HOST,
  cache: new InMemoryCache()
});
