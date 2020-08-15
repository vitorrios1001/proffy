import React from 'react'
import NumberFormat, { NumberFormatProps } from 'react-number-format';
import { useField } from '@unform/core'
import './styles.css'

interface Props extends NumberFormatProps {
  name: string
  label: string
}

const CurrencyInput: React.FC<Props> = ({ label, name, ...rest }) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  
  const [value, setValue] = React.useState(defaultValue || 0)

  React.useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const getValue = () => value

  return (
    <div className="currency-input-block">
      <label htmlFor={name}>{label}</label>
      <NumberFormat
        id={name}
        getInputRef={() => registerField({
          name: fieldName,
          getValue,
        })}

        value={value}
        onValueChange={(values) => {
    
          setValue(values.floatValue)
        }}

        decimalScale={2}
        thousandSeparator="."
        decimalSeparator=","
        fixedDecimalScale={value !== 0}
        isNumericString
        prefix="R$ "
        defaultValue={defaultValue}
        {...rest}
      />
    {error && <span className="field-error">{error}</span>}
    </div>
  )
}

export default CurrencyInput