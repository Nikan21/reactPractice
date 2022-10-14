import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./index.css";

const tasks = [
  {id: 1, task: 'Wash dishes', time: '08:00'},
  {id: 2, task: 'Clean room', time: '10:00'},
  {id: 3, task: 'Cooking', time: '12:00'},
]

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App tasks={tasks}/>
);
