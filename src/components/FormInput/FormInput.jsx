const FormInput = ({
    type,
    name,
    label,
    placeholder,
    autoComplete,
    defaultValue,
    disabled = false
}) => {
    return <div className={["form-input", type === "checkbox" ? "form-input--checkbox" : ""].join(" ")}>
        <label htmlFor={name} className="form-input__label">{ label }</label>
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            defaultValue={defaultValue}
            disabled={disabled}
            className="form-input__input"
        />
    </div> 
}

export default FormInput