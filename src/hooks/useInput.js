import { useState } from "react";

const useInput = (message, setIsError, validationFn = null) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState({
    isError: false,
    message: ''
  });

  const handleChange = (e) => {
    resetError();
    setIsError(false);
    setValue(e.target.value);
  };

  const handleBlur = () => {
    let isError = false;

    if (validationFn) {
      isError = validationFn(value);
    }

    if (value === '' || isError) {
      setError({
        isError: true,
        message
      });
      setIsError(true);
    } else {
      resetError();
    };
  };

  const resetError = () => {
    setError({
      isError: false,
      message: ''
    });
  };

  return {
    value,
    error,
    handleChange,
    handleBlur
  };
};

export default useInput;