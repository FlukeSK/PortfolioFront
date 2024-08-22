import React from "react";
import LoginForm from '../features/auth/components/LoginForm';
import RegisterContainer from '../features/auth/components/RegisterContainer';
import LogoReact from "../layouts/LogoReact";
import Footer from "../layouts/Footer";

// =============== < Function > =============== //
export default function LoginPage() {
  return (
    <div
      className=""
      style={{
        backgroundSize: "1500px 800px",
        backgroundImage:
          "url(https://img.jagranjosh.com/images/2022/November/26112022/do-you-know-when-and-how-was-the-moon-formed.jpg)",
      }}
    >
      <br />
          <LogoReact />
    <div className="max-w-sm mx-auto my-6 rounded-lg p-4">
      <LoginForm />
      <br />
      <RegisterContainer />
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}