import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import validateRegister from '../validation/validation-register';
import useAuth from '../../../hooks/use-auth';

const initial = {
  firstName: '',
  lastName: '',
  emailOrMobile: '',
  password: '',
  confirmPassword: ''
};

// =============== < Function > =============== //
export default function RegisterForm({ onSuccess }) {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});

  const { register } = useAuth();

  // =============== < Handle > =============== //
  const handleFormSubmit = async e => {
    try {
      e.preventDefault();
      const validateError = validateRegister(input);
      if (validateError) {
        return setError(validateError);
      }

      await register(input);
      toast.success('register successfully');
      onSuccess();
    } catch (err) {
      if (err.response?.data.message === 'EMAIL_MOBILE_IN_USE') {
        return setError({ emailOrMobile: 'already in use' });
      }
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // =============== < Return > =============== //
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-2 p-4 gap-4">
        {/* ========== < FirstName > ========== */}
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChangeInput}
            errorMessage={error.firstName}
          />
        </div>

        {/* ========== < LastName > ========== */}
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
            errorMessage={error.lastName}
          />
        </div>

        {/* ========== < EmailOrMobile > ========== */}
        <div className="col-span-full">
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChangeInput}
            errorMessage={error.emailOrMobile}
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
      </div>
    </form>
  );
}