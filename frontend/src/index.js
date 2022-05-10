import React, { createContext } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import ArtworkStore from "./store/ArtworkStore";

export const Context = createContext(null);

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      artwork: new ArtworkStore(),
    }}
  >
    <App />
  </Context.Provider>
);
