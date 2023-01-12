import '../src/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { store } from '../src/app/store'

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'


export const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql/',
  cache: new InMemoryCache()
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps}/>
      </ApolloProvider>
    </Provider>
  )
}
