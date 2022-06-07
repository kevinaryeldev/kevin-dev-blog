import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import registerSchema from '../../../utils/schemas/register'
import { DataType } from '../login'
import {
  FormWrapper,
  FormContainer,
  FormTitle,
  InputWrapper,
  InputStyled,
  IconRightPassword,
  ButtonSubmit,
  TextOr,
  LinkWrapper,
  LinkSignup,
} from '../login/style'

interface DataRegisterType extends DataType {
  name?: string
  paswordConfirm?: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) })

  const [viewPassword, setViewPassword] = useState(false)
  const [viewPasswordConfirm, setViewPasswordConfirm] = useState(false)
  const handleShowPassword = (isPassword: boolean) => {
    isPassword
      ? setViewPassword(!viewPassword)
      : setViewPasswordConfirm(!viewPasswordConfirm)
  }
  const submitData = (data: DataRegisterType) => {
    console.log(data)
  }
  return (
    <>
      <FormWrapper>
        <FormContainer as="form" onSubmit={handleSubmit(submitData)}>
          <FormTitle as="h2">Admin Register</FormTitle>
          <InputWrapper isInvalid={errors.name}>
            <FormLabel htmlFor="nome">Nome</FormLabel>
            <InputStyled
              id="nome"
              type="text"
              variant="flushed"
              {...register('name')}
            />
            {!errors.name ? (
              <FormHelperText
                color={'positive'}
                fontWeight={'semibold'}
              ></FormHelperText>
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
                  onClick={handleShowPassword(true)}
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
          <InputWrapper color={'secondary'} isInvalid={errors.passwordConfirm}>
            <FormLabel htmlFor="email">Senha</FormLabel>
            <InputGroup>
              <InputStyled
                id="password"
                type={viewPasswordConfirm ? 'text' : 'password'}
                variant="flushed"
                {...register('passwordConfirm')}
              />
              <InputRightElement width="3rem">
                <IconRightPassword
                  onClick={handleShowPassword(false)}
                  variant={'ghost'}
                  icon={viewPasswordConfirm ? <ViewIcon /> : <ViewOffIcon />}
                />
              </InputRightElement>
            </InputGroup>
            {!errors.passwordConfirm ? (
              <FormHelperText color={'positive'} fontWeight={'semibold'}>
                Letras, números e símbolos
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.passwordConfirm.message}
              </FormErrorMessage>
            )}
          </InputWrapper>
          <ButtonSubmit type="submit">Registrar-se</ButtonSubmit>
        </FormContainer>
      </FormWrapper>
    </>
  )
}
export default Register
