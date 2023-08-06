import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {  createHashRouter , RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <HashRouter>
        <App />
        </HashRouter> */}
        <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
