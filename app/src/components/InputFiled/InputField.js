import './InputField.css'

export const InputField = (props) => {
    const {id, type, placeholder, label, className, onChange} = props
    return(
        <div className={`input-container ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input name={id} onChange={onChange} type={type} id={id} placeholder={placeholder} />
        </div>

    )
}


export const SelectField = (props) => {
    const { id, options, label, className, onChange } = props;
  
    return (
      <div className={`input-container ${className}`}>
        <label htmlFor={id}>{label}</label>
        <select id={id} onChange={onChange} name={id}>
        <option value="SelectRole">Select Role</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
