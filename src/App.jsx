import React from "react";

import LoginPage from "./pages/LoginPage";
import FoodPage from "./pages/FoodPage";
import InfoPage from "./pages/InfoPage";
import CatsPage from "./pages/CatsPage";

import RegisterForm from "./features/auth/components/RegisterForm";
import ChangePassword from "./pages/ChangePassword";


function App() {
  return (
    // ========== Nevbar ========== //
    <div>
      {/* <Menu /> */}
      {/* <LogoCat /> */}
      {/* ========== TEST Page ========== */}
        <ChangePassword />

      {/* ========== Footer ========== */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
