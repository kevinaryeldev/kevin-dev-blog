import * as yup from 'yup'
const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required('É nescessário digitar um email')
    .email('Email inválido'),
  password: yup
    .string()
    .required('Senha Obrigatória')
    .matches(/(?=.*[A-Z])/, 'A senha deve ter, no mínimo, uma letra maiúscula')
    .matches(/^(?=.*[a-z])/, 'A senha deve ter, no mínimo, uma letra minúscula')
    .matches(/(?=.*[0-9])/, 'A senha deve ter, no mínimo, um número')
    .matches(
      /(?=.*[!@#$%^&*.])/,
      'A senha deve ter, no mínimo, um caractere especial'
    )
    .min(8, 'A senha deve ter, no mínimo, 8 caracteres'),
  passwordConfirm: yup
    .string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password')], 'Senhas Incompatíveis'),
  name: yup
    .string()
    .required('Campo Obrigatório')
    .min(4, 'Mínimo 4 caracteres')
    .max(16, 'Máximo 16 caracteres'),
})
export default registerSchema
