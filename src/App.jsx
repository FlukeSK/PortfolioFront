import React from "react";
import Menu from "./layouts/Menu";
import Footer from "./layouts/Footer";
import LoginPage from "./pages/LoginPage";


function App() {
  return (
    // ========== Nevbar ========== //
    <div>
      <Menu />
      {/* ========== TEST Page ========== */}
          <LoginPage />

      {/* ========== Footer ========== */}
      <Footer />
    </div>
  );
}

export default App;
