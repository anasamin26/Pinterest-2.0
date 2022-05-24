import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import CreatePin from "./Pages/CreatePin";
import EditProfile from "./Pages/EditProfile";
import PersonalInformationPage from "./Pages/PersonalInformationPage";
import AccountManagementPage from "./Pages/AccountManagementPage";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
