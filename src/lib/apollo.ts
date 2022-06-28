import { ApolloClient, InMemoryCache } from "@apollo/client";

const URL = 'https://api-sa-east-1.graphcms.com/v2/cl4sjaibz23sp01zc54dv2532/master'

export const client = new ApolloClient({
  uri: URL,
  
  cache: new InMemoryCache()


})
