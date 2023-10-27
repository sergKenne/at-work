
const InputComponent = ({ label, type, name, inputs, handleChange }) => {
 
  return (
      <div className="user__form-item">
          <label htmlFor={name} className="user__form-label">
              {label}
          </label>
          <input 
            className="user__form-input" 
            id={name} 
            type={type} 
            placeholder="" 
            value={inputs[name]}
            name={name}
            onChange={handleChange}
          />
      </div>
  );
}

export default InputComponent