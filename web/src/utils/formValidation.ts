import * as Yup from 'yup'
import { FormHandles } from '@unform/core';

const setMessageErrors = (error: any, formRef: FormHandles | null) => {
  if (error instanceof Yup.ValidationError) {
    const errorMessages:any = {};

    error.inner.forEach((err) => {
      errorMessages[err.path] = err.message;
    });

    formRef?.setErrors(errorMessages);
  }
}

export { setMessageErrors }