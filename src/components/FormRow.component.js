const FormRow = ({ type, name, value, handleChange, handleBlur, error, message }) => {
  return (
    <>

      <div className={`form-row ${error && 'error'}`}>
        <label htmlFor={name} className='form-label'>
          {name}
        </label>
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${error && 'error'}`}
        />
      </div>
      {error && <small>{message}</small>}
    </>
  );
};
export default FormRow;
