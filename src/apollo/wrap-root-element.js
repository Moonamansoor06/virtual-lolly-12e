
export const wrapRootElement = ({ element }) => (
    
  <ApolloProvider client={client} >
      {element}
  </ApolloProvider>


);
