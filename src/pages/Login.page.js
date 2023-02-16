import { useState } from "react";

import { validateEmail } from '../utils/validateEmail';
import { PAGES } from '../constants';

import { Logo, FormRow, Modal } from '../components';
import Wrapper from '../styles/styled/Login.styled';

const [landing] = PAGES;

const Login = ({ setPage }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    const { name, email, password } = values;

    if (!name) {
      const msg = 'Please enter your name';
      handleError(msg, setNameError);
    } else {
      setNameError(false);
    }

    if (!email || validateEmail(email)) {
      const msg = 'Please enter a valid email';
      handleError(msg, setEmailError);
    } else {
      setEmailError(false);
    }


    if (!password) {
      const msg = 'Please enter a password';
      handleError(msg, setPasswordError);
    } else {
      setPasswordError(false);
    }

    if (!name ||
      !email ||
      validateEmail(email) ||
      !password) {
      setIsLoading(false);
      setIsError(true);
      return;
    } else {
      localStorage.setItem('userData', JSON.stringify(values));

      setTimeout(() => {
        window.location.reload(false);
      }, 2000);
    }
  };

  const handleError = (msg, setMethod) => {
    setMethod(true);
    const messages = errorMessages;
    messages.push(msg);
    setErrorMessages(messages);
  };

  const closeModal = () => {
    setIsError(false);
    setErrorMessages([]);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        {/* name field */}
        <FormRow
          error={nameError}
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
        {/* email field */}
        <FormRow
          error={emailError}
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          error={passwordError}
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'loading...' : 'Log In'}
        </button>
        <button className='btn btn-block btn-light mt' onClick={() => setPage(landing)}>
          Back
        </button>
      </form>
      {isError && (
        <Modal
          closeModal={closeModal}
          messages={errorMessages}
        />
      )}
    </Wrapper>
  );
};

export default Login;