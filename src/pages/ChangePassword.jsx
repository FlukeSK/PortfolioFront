import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button";
import Input from "../components/Input";
import validateRegister from "../features/auth/validation/validation-register";
import LogoCat from "../layouts/LogoCat";
import Footer from "../layouts/Footer";

const initial = {
  email: "",
  mobile: "",
  password: "",
  confirmPassword: "",
};

// =============== < Function > =============== //
export default function ChangePassword({ onSuccess }) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  // =============== < Handle > =============== //
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateRegister(input);
      if (validateError) {
        return setError(validateError);
      }

      await rupdatepassword(input);
      toast.success("updatepassword successfully");
      onSuccess();
    } catch (err) {
      if (err.response?.data.message === "EMAIL_MOBILE_IN_USE") {
        return setError({ email: "already in use" });
      }
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // =============== < Return > =============== //
  return (
    <div>
      <br />
      <LogoCat />
      {/* =============== < Form > =============== */}
      <div className=" flex justify-center items-center p-10">
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-2 p-4 gap-4"
        >
          {/* ========== < Email > ========== */}
          <div className="col-span-full w-[22rem]">
            <Input
              placeholder="Email address or mobile number"
              value={input.email}
              name="email"
              onChange={handleChangeInput}
              errorMessage={error.email}
            />
          </div>

          {/* ========== < Mobile > ========== */}
          <div className="col-span-full w-[22rem]">
            <Input
              placeholder="Email address or mobile number"
              value={input.mobile}
              name="mobile"
              onChange={handleChangeInput}
              errorMessage={error.mobile}
            />
          </div>

          {/* ========== < Password > ========== */}
          <div className="col-span-full">
            <Input
              placeholder="Password"
              value={input.password}
              name="password"
              onChange={handleChangeInput}
              type="password"
              errorMessage={error.password}
            />
          </div>

          {/* ========== < ConfirmPassword > ========== */}
          <div className="col-span-full">
            <Input
              placeholder="Confirm password"
              value={input.confirmPassword}
              name="confirmPassword"
              onChange={handleChangeInput}
              type="password"
              errorMessage={error.confirmPassword}
            />
          </div>

          {/* ========== < Button > ========== */}
          <div className="col-span-full text-center">
            <Button bg="pink" color="white">
              Confirm
            </Button>
          </div>
        </form>
      </div>
      {/* =============== < END > =============== */}
      <br />
      <Footer />
    </div>
  );
}
