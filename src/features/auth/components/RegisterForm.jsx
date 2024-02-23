import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import validateRegister from "../validation/validation-register";
import useAuth from "../../../hooks/use-auth";
import LogoCat from "../../../layouts/LogoCat";


const initial = {
  email: "",
  mobile: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

// =============== < Function > =============== //
export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

 
  const { register } = useAuth();

  // =============== < Handle > =============== //
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateRegister(input);
      console.log(
        'validate error',validateError
      )
      if (validateError) {
        return setError(validateError);
      }

      await register(input);
      toast.success("register successfully");
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
      <LogoCat />

      {/* =============== < Form > =============== */}
      <div className=" flex justify-center items-center">
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-2 p-4 gap-4 w-full"
        >
          <div className=" col-span-full">
            {/* ========== < FirstName > ========== */}
            <Input
              placeholder="First name"
              value={input.firstName}
              name="firstName"
              onChange={handleChangeInput}
              errorMessage={error.firstName}
            />
          </div>

          {/* ========== < LastName > ========== */}
          <div className="col-span-full">
            <Input
              placeholder="Last name"
              value={input.lastName}
              name="lastName"
              onChange={handleChangeInput}
              errorMessage={error.lastName}
            />
          </div>

          {/* ========== < Email > ========== */}
          <div className="col-span-full">
            <Input
              placeholder="email address"
              value={input.email}
              name="email"
              onChange={handleChangeInput}
              errorMessage={error.email}
            />
          </div>

          {/* ========== < mobile > ========== */}
          <div className="col-span-full">
            <Input
              placeholder="mobile number"
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
              Sign up
            </Button>
          </div>
        </form>
      </div>
      {/* =============== < END > =============== */}

    </div>
  );
}
