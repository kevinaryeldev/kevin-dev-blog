import { Button } from '@chakra-ui/react'
import { ChakraButtonComponentProps } from '../../utils/types'
import { useColorModeValue } from '@chakra-ui/react'

interface ButtonDarkModeProps extends ChakraButtonComponentProps {
  'aria-label': string
  invert: boolean
}

export const ButtonDarkModeStyle = ({
  children,
  invert,
  ...props
}: ButtonDarkModeProps) => (
  <Button
    background="inherit"
    color={
      invert
        ? useColorModeValue('white', 'black')
        : useColorModeValue('black', 'white')
    }
    {...props}
    _hover={{
      backgroundColor: 'inherit',
    }}
    _active={{ backgroundColor: 'inherit' }}
  >
    {children}
  </Button>
)
