import {
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  FormLabel,
  Input,
  Heading,
  Button,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import loginSchema from '../../utils/schemas/login'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })

  const [viewPassword, setViewPassword] = useState(false)

  const handleShowPassword = () => setViewPassword(!viewPassword)
  return (
    <>
      <Center height={'full'}>
        <Flex
          gap={'10'}
          as="form"
          direction={'column'}
          bg={'#f7dece'}
          borderRadius={'3xl'}
          padding={'12'}
          minW={'320px'}
        >
          <Heading as="h2" size="xl" color={'primary'} textAlign={'center'}>
            Admin Login
          </Heading>
          <FormControl color={'secondary'} isInvalid={errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              borderColor={'primary'}
              color={'primary'}
              variant="flushed"
              id="email"
              type="email"
            />
            {!errors.email ? (
              <FormHelperText color={'positive'} fontWeight={'bold'}>
                Digite seu E-mail.
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.email.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl color={'secondary'} isInvalid={errors.password}>
            <FormLabel htmlFor="email">Senha</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={viewPassword ? 'text' : 'password'}
                variant="flushed"
                borderColor={'primary'}
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  aria-label="password visibility"
                  h="1.75rem"
                  size="sm"
                  onClick={handleShowPassword}
                  variant={'ghost'}
                  icon={viewPassword ? <ViewIcon /> : <ViewOffIcon />}
                />
              </InputRightElement>
            </InputGroup>
            {!errors.password ? (
              <FormHelperText color={'positive'} fontWeight={'bold'}>
                Letras, números e símbolos
              </FormHelperText>
            ) : (
              <FormErrorMessage color={'error'}>
                {errors.password.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <Button type="submit">Logar-se</Button>
        </Flex>
      </Center>
    </>
  )
}
export default Login
