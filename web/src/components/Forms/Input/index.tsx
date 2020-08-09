import React from 'react'
import { useField } from '@unform/core'
import './styles.css'

interface Props {
  name: string
  label: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  React.useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    })
  }, [fieldName, registerField]);

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    {error && <span className="field-error">{error}</span>}
    </div>
  )
}

export default Input