import { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Header from "./pages/Header";

function App() {
  return <Header />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
