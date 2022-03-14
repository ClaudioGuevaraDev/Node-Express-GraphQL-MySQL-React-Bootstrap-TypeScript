import "./main.css";
import 'react-toastify/dist/ReactToastify.css';

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

import "bootswatch/dist/quartz/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
