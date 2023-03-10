import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import useInput from './useInput';
import { validateEmail } from '../utils/validateEmail';

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const {
    value: name,
    error: nameError,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur
  } = useInput('Please enter your name', setError);

  const {
    value: password,
    error: passwordError,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur
  } = useInput('Please enter your password', setError);

  const {
    value: email,
    error: emailError,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur
  } = useInput('Please enter a valid email', setError, validateEmail);

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!name || !email || validateEmail(email) || !password) {
      setIsLoading(false);
      setError(true);
      handleNameBlur();
      handleEmailBlur();
      handlePasswordBlur();
      return;
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setError(false);
        localStorage.setItem('userData', JSON.stringify({ name, email })); 
        navigate('/main');
      }, 2000);
    }
  };

  return {
    name,
    nameError,
    handleNameChange,
    handleNameBlur,
    email,
    emailError,
    handleEmailChange,
    handleEmailBlur,
    password,
    passwordError,
    handlePasswordChange,
    handlePasswordBlur,
    onSubmit,
    isLoading,
    error
  };
};

export default useLogin;