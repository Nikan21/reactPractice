import ReactDOM from "react-dom/client";
import React from 'react'
import GretingsContext from './context'
import App from "./app.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GretingsContext.Provider value={{text: 'Hello'}}>
  <App/>
  </GretingsContext.Provider>
);
