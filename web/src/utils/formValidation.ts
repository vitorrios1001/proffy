import * as Yup from 'yup'
import { FormHandles } from '@unform/core';
import { formatterCurrencyValue } from './formatter';

const messages = {
  min: (number: number) => `Mínimo de ${number} caracteres.`,
  max: (number: number) => `Máximo de ${number} caracteres.`,
  minCurrency: (number: number) => `Valor mínimo de ${formatterCurrencyValue(number)}.`,
  maxCurrency: (number: number) => `Valor máximo de ${formatterCurrencyValue(number)}.`,
  isRequired: 'Este campo é obrigatório',
  isEmail: 'Preencha esse campo com um email válido',
  isNumber: 'Este campo aceita somente números',
  isString: 'Este campo aceita somente texto',
  isUrl: 'Este campo aceita somente url',
};

const setMessageErrors = (error: any, formRef: FormHandles | null) => {
  if (error instanceof Yup.ValidationError) {
    const errorMessages:any = {};

    error.inner.forEach((err) => {
      errorMessages[err.path] = err.message;
    });

    formRef?.setErrors(errorMessages);
  }
}

export { setMessageErrors, messages }