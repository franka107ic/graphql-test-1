import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Playground, store } from "graphql-playground-react";

ReactDOM.render(
  <Provider store={store}>
    <Playground endpoint="https://www.checkoutmydeck.com/graphql" />
  </Provider>,
  document.body
);
