import { Box, Button, Input, useColorModeValue } from '@chakra-ui/react'
import { darken, lighten } from '@chakra-ui/theme-tools'
import { ChakraComponentProps } from '../../../utils/types'

interface InputStyledProps {
  type?: 'email' | 'text' | 'password'
  id?: string
  variant?: string
}

interface ButtonAdminStyle extends ChakraComponentProps {
  type?: 'button' | 'submit'
  w?: string
}

export const ButtonAdminStyle = ({ children, ...props }: ButtonAdminStyle) => (
  <Button
    w="full"
    background={useColorModeValue('black', 'white')}
    color={useColorModeValue('white', 'black')}
    _hover={{
      bg: useColorModeValue(lighten('black', 10), lighten('white', 10)),
    }}
    _active={{
      bg: useColorModeValue(darken('black', 10), darken('white', 10)),
    }}
    {...props}
  >
    {children}
  </Button>
)

export const LinkWrapperStyle = ({
  children,
  ...props
}: ChakraComponentProps) => (
  <Box
    padding="3"
    borderRadius="xl"
    alignSelf="center"
    w="fit-content"
    color={useColorModeValue('black', 'white')}
    _hover={{
      bg: useColorModeValue(lighten('white', 10), lighten('black', 10)),
    }}
    _active={{
      bg: useColorModeValue(darken('white', 10), darken('black', 10)),
    }}
    {...props}
  >
    {children}
  </Box>
)

export const InputStyled = ({ ...props }: InputStyledProps) => (
  <Input
    bg="inherit"
    pr="4.5rem"
    borderColor={useColorModeValue('black', 'white')}
    {...props}
  ></Input>
)
