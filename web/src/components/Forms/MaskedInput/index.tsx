import React from 'react'
import InputMask, { Props as MaskedInputProps } from 'react-input-mask'
import { useField } from '@unform/core'
import './styles.css'

interface Props extends MaskedInputProps {
  name: string
  label: string
  mask: string
  asNumber?: boolean
}

const MaskedInput: React.FC<Props> = ({
  label,
  name,
  mask,
  asNumber,
  ...rest
}) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  const [value, setValue] = React.useState(defaultValue)

  React.useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const getValue = () => value

  return (
    <div className="masked-input-block">
      <label htmlFor={name}>{label}</label>
      <InputMask
        id={name}
        name={fieldName}
        mask={mask}
        defaultValue={defaultValue}
        value={value}
        onChange={(e) => setValue(asNumber ? e.target.valueAsNumber : e.target.value)}
        ref={() => registerField({
          name: fieldName,
          getValue
        })}
        {...rest}
      />
    {error && <span className="field-error">{error}</span>}
    </div>
  )
}

export default MaskedInput