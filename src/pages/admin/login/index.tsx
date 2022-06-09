import {
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
  FormControl,
  Box,
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import loginSchema from '../../../utils/schemas/login'
import {
  FormContainer,
  FormWrapper,
  IconRightPassword,
  LinkSignup,
  TextOr,
} from './style'
import { ButtonAdminStyle, LinkWrapperStyle, InputStyled } from './style2'
import { PageWrapper } from '../../../style/styledComponents'
import AdminHeader from '../../../components/AdminHeader'
import ButtonDarkMode from '../../../components/ButtonDarkMode'

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

  const submitLogin = (data: DataType) => {
    console.log(data)
  }

  const [viewPassword, setViewPassword] = useState(false)

  const handleShowPassword = () => setViewPassword(!viewPassword)

  return (
    <PageWrapper>
      <AdminHeader pageTitle="Admin Login">
        <ButtonDarkMode />
      </AdminHeader>
      <FormWrapper>
        <FormContainer as="form" onSubmit={handleSubmit(submitLogin)}>
          <FormControl isInvalid={errors.email}>
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
          </FormControl>
          <FormControl isInvalid={errors.password}>
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
          </FormControl>
          <Box display="flex" flexDir="column" gap="2">
            <ButtonAdminStyle type="submit">Logar-se</ButtonAdminStyle>
            <TextOr>Ou</TextOr>
            <LinkWrapperStyle>
              <LinkSignup to={'/admin/register'}>Cadastre-se</LinkSignup>
            </LinkWrapperStyle>
          </Box>
        </FormContainer>
      </FormWrapper>
    </PageWrapper>
  )
}
export default Login
