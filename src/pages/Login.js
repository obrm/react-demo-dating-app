import { useState } from "react";

import { Logo, FormRow } from '../components';
import Wrapper from '../assets/wrappers/LoginPage';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, email, password } = values;
    if (!email || !password || !name) {
      return;
    }

    localStorage.setItem('userData', JSON.stringify(values));

    setTimeout(() => {
      setIsLoading(false);
      window.location.reload(false);
    }, 2000);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Login'}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'loading...' : 'Log In'}
        </button>
      </form>
    </Wrapper>
  );
};

export default Login;