import { useState } from "react";

import { validateEmail } from '../utils/validateEmail';
import { PAGES } from '../constants';

import { Logo, FormRow } from '../components';
import Wrapper from '../styles/styled/Login.styled';

const [landing] = PAGES;

const Login = ({ setPage }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [nameError, setNameError] = useState({
    isError: false,
    message: ''
  });
  const [emailError, setEmailError] = useState({
    isError: false,
    message: ''
  });
  const [passwordError, setPasswordError] = useState({
    isError: false,
    message: ''
  });

  const handleChange = (e) => {
    setNameError({
      isError: false,
      message: ''
    });
    setEmailError({
      isError: false,
      message: ''
    });
    setPasswordError({
      isError: false,
      message: ''
    })
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { name, email, password } = values;

    if (!name) {
      const message = 'Please enter your name';
      setNameError({
        isError: true,
        message
      })
    } else {
      setNameError({
        isError: false,
        message: ''
      });
    }

    if (!email || validateEmail(email)) {
      const message = 'Please enter a valid email';
      setEmailError({
        isError: true,
        message
      })
    } else {
      setEmailError({
        isError: false,
        message: ''
      });
    }


    if (!password) {
      const message = 'Please enter a password';
      setPasswordError({
        isError: true,
        message
      })
    } else {
      setPasswordError({
        isError: false,
        message: ''
      });
    }

    if (!name ||
      !email ||
      validateEmail(email) ||
      !password) {
      setIsLoading(false);      
      return;
    } else {
      localStorage.setItem('userData', JSON.stringify(values));

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
          value={values.name}
          handleChange={handleChange}
        />
        {nameError.isError && <small>{nameError.message}</small>}
        {/* email field */}
        <FormRow
          error={emailError.isError}
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {emailError.isError && <small>{emailError.message}</small>}
        {/* password field */}
        <FormRow
          error={passwordError.isError}
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
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