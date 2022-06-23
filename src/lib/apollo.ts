import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pwo8522hhc01xsg6zy30yo/master',
  cache: new InMemoryCache(),
})
