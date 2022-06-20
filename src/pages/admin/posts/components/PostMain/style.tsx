import { FormLabel, Input, Textarea, useColorModeValue } from '@chakra-ui/react'
import { darken, lighten } from '@chakra-ui/theme-tools'
import { ChakraComponentProps } from '../../../../../utils/types'

interface InputFormPostStyle {
  name: string
}

export const InputFormPostStyle = ({ ...props }: InputFormPostStyle) => (
  <Input
    w={['3xs', '2xs', 'sm']}
    fontSize={['md', 'lg', 'xl']}
    bg="inherit"
    pr="4.5rem"
    borderColor={useColorModeValue('black', 'white')}
    borderTopRadius="md"
    _empty={{
      backgroundColor: useColorModeValue(
        darken('white', 5),
        lighten('black', 5)
      ),
    }}
    variant={'flushed'}
    {...props}
  />
)

export const TextAreaFormPostStyle = ({ ...props }: InputFormPostStyle) => (
  <Textarea
    h={['12rem', '12rem', '3xs']}
    resize="none"
    pr="4.5rem"
    bg="white"
    borderColor={useColorModeValue('black', 'white')}
    borderTopRadius="md"
    _hover={{}}
    _empty={{
      backgroundColor: useColorModeValue(
        darken('white', 5),
        lighten('black', 5)
      ),
    }}
    {...props}
  />
)

export const FormLabelPostStyle = ({ children }: ChakraComponentProps) => (
  <FormLabel color={useColorModeValue('black', 'white')}>{children}</FormLabel>
)
