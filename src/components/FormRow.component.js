const FormRow = ({ type, name, value, handleChange, labelText, error }) => {
  return (
    <div className={`form-row ${error && 'error'}`}>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className={`form-input ${error && 'error'}`}
      />
    </div>
  );
};
export default FormRow;
