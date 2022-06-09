import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import AdminHeader from '../../../components/AdminHeader'
import ButtonDarkMode from '../../../components/ButtonDarkMode'
import { PageWrapper } from '../../../style/styledComponents'
import registerSchema from '../../../utils/schemas/register'
import { DataType } from '../login'
import {
  FormContainer,
  FormWrapper,
  IconRightPassword,
  LinkSignup,
  TextOr,
} from '../login/style'
import {
  ButtonAdminStyle,
  LinkWrapperStyle,
  InputStyled,
} from '../login/style2'

interface DataTypeRegister extends DataType {
  name?: string
  passwordConfirm?: string
}

const Register = () => {
  const [viewPassword, setViewPassword] = useState(false)
  const [viewPasswordConfirm, setViewPasswordConfirm] = useState(false)
  const handleShowPassword = (isPassword: boolean) => {
    isPassword
      ? setViewPassword(!viewPassword)
      : setViewPasswordConfirm(!viewPasswordConfirm)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) })

  const submitRegister = (data: DataTypeRegister) => {
    console.log(data)
  }

  return (
    <PageWrapper>
      <AdminHeader pageTitle="Registro de Admin">
        <ButtonDarkMode />
      </AdminHeader>
      <FormWrapper>
        <FormContainer as="form" onSubmit={handleSubmit(submitRegister)}>
          <FormControl isInvalid={errors.name}>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <InputStyled
              id="name"
              type="text"
              variant="flushed"
              {...register('name')}
            />
            {!errors.name ? (
              <FormHelperText color={'positive'} fontWeight={'semibold'}>
                {' '}
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.name.message}
              </FormErrorMessage>
            )}
          </FormControl>
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
                {''}
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.email.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <InputGroup>
              <InputStyled
                id="password"
                type={viewPassword ? 'text' : 'password'}
                variant="flushed"
                {...register('password')}
              />
              <InputRightElement width="3rem">
                <IconRightPassword
                  onClick={() => handleShowPassword(true)}
                  variant={'ghost'}
                  icon={viewPassword ? <ViewIcon /> : <ViewOffIcon />}
                />
              </InputRightElement>
            </InputGroup>
            {!errors.password ? (
              <FormHelperText color={'positive'} fontWeight={'semibold'}>
                {' '}
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.password.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.passwordConfirm}>
            <FormLabel htmlFor="passwordConfirm">Confirmar Senha</FormLabel>
            <InputGroup>
              <InputStyled
                id="passwordConfirm"
                type={viewPasswordConfirm ? 'text' : 'password'}
                variant="flushed"
                {...register('passwordConfirm')}
              />
              <InputRightElement width="3rem">
                <IconRightPassword
                  onClick={() => handleShowPassword(false)}
                  variant={'ghost'}
                  icon={viewPasswordConfirm ? <ViewIcon /> : <ViewOffIcon />}
                />
              </InputRightElement>
            </InputGroup>
            {!errors.passwordConfirm ? (
              <FormHelperText color={'positive'} fontWeight={'semibold'}>
                {' '}
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.passwordConfirm.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <Box display="flex" flexDir="column" gap="2">
            <ButtonAdminStyle type="submit">Registrar-se</ButtonAdminStyle>
            <TextOr>Ou</TextOr>
            <LinkWrapperStyle>
              <LinkSignup to={'/admin/login'}>Voltar ao Login</LinkSignup>
            </LinkWrapperStyle>
          </Box>
        </FormContainer>
      </FormWrapper>
    </PageWrapper>
  )
}
export default Register
