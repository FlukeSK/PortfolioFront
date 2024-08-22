import React from "react";
import LoginForm from '../features/auth/components/LoginForm';
import RegisterContainer from '../features/auth/components/RegisterContainer';
import LogoReact from "../layouts/LogoReact";
import Footer from "../layouts/Footer";

// =============== < Function > =============== //
export default function LoginPage() {
  return (
    <div>
      <br />
          <LogoReact />
    <div className="max-w-sm mx-auto my-6 rounded-lg p-4 bg-white shadow-lg">
      <LoginForm />
      <hr className="my-11 border" />
      <RegisterContainer />
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}