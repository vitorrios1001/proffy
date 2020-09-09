import * as Yup from 'yup'
import { messages as m } from '../../utils/formValidation'

const schemaSchedule = Yup.object().shape({
  week_day: Yup.string().required('Selecione uma matéria'),

  from: Yup.string()
    .min(5, 'Hora inválida')
    .required(m.isRequired),
  
  to: Yup.string()
    .min(5, 'Hora inválida')
    .required(m.isRequired),
})

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, m.min(3))
    .max(255, m.min(255))
    .required(m.isRequired),

  avatar: Yup.string()
    .url(m.isUrl)
    .max(255, m.min(255))
    .required(m.isRequired),

  whatsapp: Yup.string()
    .min(16, 'Digite seu numero de telefone completo')
    .required(m.isRequired),
  
  bio: Yup.string()
    .min(3, m.min(3))
    .max(255, m.max(255))
    .required(m.isRequired),

  subject: Yup.string().required(m.isRequired),

  cost: Yup.number()
    .min(10, m.minCurrency(10))
    .max(999999, m.maxCurrency(999999))
    .required(m.isRequired),
    
  schedule: Yup.array(schemaSchedule)
    .min(1, 'Você deve inserir ao menos um horário para prosseguir')
    .required(m.isRequired),
});

export { schema }