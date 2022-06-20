import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { ChakraComponentProps } from '../../../../../utils/types'

export const PostSectionContainer = ({ children }: ChakraComponentProps) => (
  <Box padding="5" boxSizing="border-box">
    {children}
  </Box>
)
export const DecorationPost = () => (
  <Box
    h="0px"
    w="full"
    bg={'transparent'}
    boxShadow={'0px 0px 5px 0.5px #ff9626'}
  />
)
