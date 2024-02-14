import React from "react";
import LoginForm from '../features/auth/components/LoginForm';
import RegisterContainer from '../features/auth/components/RegisterContainer';

// =============== < Function > =============== //
export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto my-32 rounded-lg p-4 bg-white shadow-lg">
      <LoginForm />
      <hr className="my-6 border" />
      <RegisterContainer />
    </div>
  );
}