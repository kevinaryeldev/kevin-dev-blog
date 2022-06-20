import { chakra, Box, Button } from '@chakra-ui/react'
import { darken, lighten } from '@chakra-ui/theme-tools'
import { ChakraButtonComponentProps } from '../../../../utils/types'
import { useColorModeValue } from '@chakra-ui/react'

interface SectionButtonProps extends ChakraButtonComponentProps {
  bgcol: string
}

export const SectionButton = ({ children, ...props }: SectionButtonProps) => (
  <Button
    fontSize={['sm', 'md']}
    background={props.bgcol}
    color={'white'}
    _hover={{
      background: useColorModeValue(
        darken(props.bgcol, 10),
        lighten(props.bgcol, 10)
      ),
    }}
    _active={{
      background: useColorModeValue(
        darken(props.bgcol, 15),
        lighten(props.bgcol, 15)
      ),
    }}
    {...props}
  >
    {children}
  </Button>
)
