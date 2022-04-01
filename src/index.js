import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store.js";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
  const state = store.getState();
  rerenderEntireTree(state);
});

serviceWorker.unregister();
