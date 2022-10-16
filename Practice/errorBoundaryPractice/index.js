import ReactDOM from "react-dom/client";
import ErrorBoundary from "./errorBoundary";
import App from "./app.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <ErrorBoundary errorHandler={(error, errorInfo) => <p>{error.message}</p>} >
    <App />
  </ErrorBoundary>
  <ErrorBoundary errorHandler={(error, errorInfo) => <p>{error.message}</p>}>
    <App />
  </ErrorBoundary>
  <ErrorBoundary errorHandler={(error, errorInfo) => <p>{error.message}</p>}>
    <App />
  </ErrorBoundary>
  </>
);
