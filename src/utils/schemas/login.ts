import * as yup from 'yup'
const loginSchema = yup.object().shape({
  email: yup.string().required('Digite seu email').email('Email inválido'),
  password: yup
    .string()
    .required('Digite sua senha')
    .min(8, 'Senha muito curta'),
})
export default loginSchema
