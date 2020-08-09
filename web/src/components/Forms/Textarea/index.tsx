import React from 'react'
import { useField } from '@unform/core'

import './styles.css'

interface Props {
  label: string
  name: string
}

type TextareaProps = JSX.IntrinsicElements['textarea'] & Props;

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }: Props) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  React.useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    })
  }, [fieldName, registerField]);

  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className="field-error">{error}</span>}
    </div>
  )
}

export default Textarea