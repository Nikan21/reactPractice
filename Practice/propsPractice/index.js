import ReactDOM from "react-dom/client";
import App from "./app.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("first-practice"));
root.render(
  <App
    author={{ name: "Dmytro", avatarUrl: "ass" }}
    text="Hello"
    date="10/10/2022"
  />
);
