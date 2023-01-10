import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const container = document.getElementById('root')!;
const root = createRoot(container);

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql/',
  cache: new InMemoryCache()
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
])

root.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <RouterProvider router={router}/>
    </ApolloProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
