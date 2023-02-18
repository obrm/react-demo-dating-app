import { useState } from "react";

import useInput from './../hooks/useInput';

import { validateEmail } from '../utils/validateEmail';
import { PAGES } from '../constants';

import { Logo, FormRow } from '../components';
import Wrapper from '../styles/styled/Login.styled';

const [landing] = PAGES;

const Login = ({ setPage }) => {
  const {
    value: name,
    error: nameError,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur
  } = useInput('Please enter your name');
  const {
    value: email,
    error: emailError,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur
  } = useInput('Please enter a valid email', validateEmail);
  const {
    value: password,
    error: passwordError,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur
  } = useInput('Please enter your password');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (!name || !email || !password) {
      setIsLoading(false);
      handleNameBlur();
      handleEmailBlur();
      handlePasswordBlur()
      return;
    } else {
      localStorage.setItem('userData', JSON.stringify({ name, email }));

      setTimeout(() => {
        window.location.reload(false);
      }, 2000);
    }
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        {/* name field */}
        <FormRow
          error={nameError.isError}
          type='text'
          name='name'
          value={name}
          handleChange={handleNameChange}
          handleBlur={handleNameBlur}
        />
        {nameError.isError && <small>{nameError.message}</small>}
        {/* email field */}
        <FormRow
          error={emailError.isError}
          type='email'
          name='email'
          value={email}
          handleChange={handleEmailChange}
          handleBlur={handleEmailBlur}
        />
        {emailError.isError && <small>{emailError.message}</small>}
        {/* password field */}
        <FormRow
          error={passwordError.isError}
          type='password'
          name='password'
          value={password}
          handleChange={handlePasswordChange}
          handleBlur={handlePasswordBlur}
        />
        {passwordError.isError && <small>{passwordError.message}</small>}
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'loading...' : 'Log In'}
        </button>
        <button className='btn btn-block btn-light mt' onClick={() => setPage(landing)}>
          Back
        </button>
      </form>
    </Wrapper>
  );
};

export default Login;