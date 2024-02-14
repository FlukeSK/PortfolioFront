import { useState } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import validateLogin from '../validation/validate-login';
import useAuth from '../../../hooks/use-auth';
import { toast } from 'react-toastify';

// =============== < Function > =============== //
export default function LoginForm() {
  const [input, setInput] = useState({ emailOrMobile: '', password: '' });
  const [error, setError] = useState({});

  const { login } = useAuth();

  // =============== < Handle > =============== //
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const validationError = validateLogin(input);
      if (validationError) {
        return setError(validationError);
      }

      await login(input);
      toast.success('login successfully');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // =============== < Return > =============== //
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid gap-4">
        <div>
          <Input
            placeholder="Email address or mobile number"
            value={input.emailOrMobile}
            name="emailOrMobile"
            onChange={handleChangeInput}
            errorMessage={error.emailOrMobile}
          />
        </div>
        <div>
          <Input
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            errorMessage={error.password}
          />
        </div>
        <Button bg="pink" color="white">
          Log in
        </Button>
      </div>
    </form>
  );
}