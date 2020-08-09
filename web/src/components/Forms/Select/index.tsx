import React from 'react'
import ReactSelect, {
  OptionTypeBase,
  Props as SelectProps,
} from 'react-select'
import { useField } from '@unform/core'

import './styles.css'

interface Option {
  value: string
  label: string
}

interface Props extends SelectProps<OptionTypeBase> {
  label: string
  name: string
  options: Option[]
}

const Select = ({ label, name, options, placeholder, ...rest }: Props) => {
  const selectRef = React.useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <ReactSelect
        id={name}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        placeholder={placeholder || 'Selecione uma opção'}
        options={options}
        {...rest}
      /> 
      {error && <span className="field-error">{error}</span>}
    </div>
  )
}

export default Select