import {
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import loginSchema from '../../../utils/schemas/login'
import {
  ButtonSubmit,
  FormContainer,
  FormTitle,
  FormWrapper,
  IconRightPassword,
  InputStyled,
  InputWrapper,
  LinkSignup,
  LinkWrapper,
  TextOr,
} from './style'

export interface DataType {
  email?: string
  password?: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })

  const submitData = (data: DataType) => {
    console.log(data)
  }

  const [viewPassword, setViewPassword] = useState(false)

  const handleShowPassword = () => setViewPassword(!viewPassword)

  return (
    <>
      <FormWrapper>
        <FormContainer as="form" onSubmit={handleSubmit(submitData)}>
          <FormTitle as="h2">Admin Login</FormTitle>
          <InputWrapper isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <InputStyled
              id="email"
              type="email"
              variant="flushed"
              {...register('email')}
            />
            {!errors.email ? (
              <FormHelperText color={'positive'} fontWeight={'semibold'}>
                Digite seu E-mail.
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.email.message}
              </FormErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper color={'secondary'} isInvalid={errors.password}>
            <FormLabel htmlFor="email">Senha</FormLabel>
            <InputGroup>
              <InputStyled
                id="password"
                type={viewPassword ? 'text' : 'password'}
                variant="flushed"
                {...register('password')}
              />
              <InputRightElement width="3rem">
                <IconRightPassword
                  onClick={handleShowPassword}
                  variant={'ghost'}
                  icon={viewPassword ? <ViewIcon /> : <ViewOffIcon />}
                />
              </InputRightElement>
            </InputGroup>
            {!errors.password ? (
              <FormHelperText color={'positive'} fontWeight={'semibold'}>
                Letras, números e símbolos
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.password.message}
              </FormErrorMessage>
            )}
          </InputWrapper>
          <ButtonSubmit type="submit">Logar-se</ButtonSubmit>
          <TextOr>Ou</TextOr>
          <LinkWrapper>
            <LinkSignup to={'/admin/register'}>Cadastre-se</LinkSignup>
          </LinkWrapper>
        </FormContainer>
      </FormWrapper>
    </>
  )
}
export default Login
