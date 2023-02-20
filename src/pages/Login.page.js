import { Link } from 'react-router-dom';

import { Logo, FormRow } from '../components';
import Wrapper from '../styles/styled/Login.styled';
import useLogin from './../hooks/useLogin';

const Login = () => {
  const {
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
  } = useLogin();

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
          message={nameError.message}
        />
        {/* email field */}
        <FormRow
          error={emailError.isError}
          type='email'
          name='email'
          value={email}
          handleChange={handleEmailChange}
          handleBlur={handleEmailBlur}
          message={emailError.message}
        />
        {/* password field */}
        <FormRow
          error={passwordError.isError}
          type='password'
          name='password'
          value={password}
          handleChange={handlePasswordChange}
          handleBlur={handlePasswordBlur}
          message={passwordError.message}
        />
        <button type='submit' className='btn btn-block' disabled={error || isLoading}>
          {isLoading ? 'loading...' : 'Log In'}
        </button>
        <Link to='/' className='btn btn-block btn-light mt'>
          Back
        </Link>
      </form>
    </Wrapper>
  );
};

export default Login;