import React from "react";
import ReactDOM from "react-dom/client"; // Make sure this is imported
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.css"; // Include your global styles if needed

ReactDOM.createRoot(document.getElementById("root")).render(
 <BrowserRouter basename="/foodora">
  <App />
 </BrowserRouter>
);
