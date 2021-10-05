import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

let token = null;

const httpLink = createHttpLink({
  uri: 'https://headless.geexu.org/graphql',
});

if (typeof window !== "undefined") {
  token =  JSON.parse(sessionStorage.getItem("token"))
}

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
