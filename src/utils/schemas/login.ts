import * as yup from 'yup'
const loginSchema = yup.object().shape({
  email: yup.string().required('Campo Obrigatório').email('Email inválido'),
  password: yup
    .string()
    .required('Campo Obrigatório')
    .min(8, 'Senha muito curta'),
})
export default loginSchema
