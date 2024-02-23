import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import DateContextProvider from "./features/auth/contexts/DateContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <DateContextProvider>
      <App />
      </DateContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
