import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import registerSchema from '../../../utils/schemas/register'
import { DataType } from '../login'
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
} from '../login/style'

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
    <>
      <FormWrapper paddingY={10}>
        <FormContainer as="form" onSubmit={handleSubmit(submitRegister)}>
          <FormTitle as="h2">Registro de Admin</FormTitle>
          <InputWrapper isInvalid={errors.name}>
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
          </InputWrapper>
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
                {''}
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.email.message}
              </FormErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper isInvalid={errors.password}>
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
          </InputWrapper>
          <InputWrapper isInvalid={errors.passwordConfirm}>
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
          </InputWrapper>
          <ButtonSubmit type="submit">Registrar-se</ButtonSubmit>
          <TextOr>Ou</TextOr>
          <LinkWrapper>
            <LinkSignup to={'/admin/login'}>Voltar ao Login</LinkSignup>
          </LinkWrapper>
        </FormContainer>
      </FormWrapper>
    </>
  )
}
export default Register
