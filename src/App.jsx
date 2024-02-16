import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Spinner from "./components/Spinner";
import useAuth from "./hooks/use-auth";

import FoodPage from "./pages/FoodPage";
import InfoPage from "./pages/InfoPage";
import CatsPage from "./pages/CatsPage";
import HomePage from "./pages/HomePage";
import ChangePassword from "./pages/ChangePassword";
import QuePage from "./pages/QuePage";

import Router from "./route/index";

import CheckUser from "./pages/CheckUser";

// ========== function ========== //
function App() {
  const { initialLoading } = useAuth();

  if (initialLoading) return <Spinner />;
  return (
    // ========== Nevbar ========== //
    <div>
      {/* <CatsPage /> */}
      <CatsPage />
      {/* <Route>

        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<HomePage />}/>
        <Route path="/cats" element={<CatsPage />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/queue" element={<QuePage />} />

      </Route> */}
    </div>
  );
}

export default App;
