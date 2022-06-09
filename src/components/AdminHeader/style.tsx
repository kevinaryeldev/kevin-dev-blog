import { chakra, Box, Heading, useColorModeValue, Text } from '@chakra-ui/react'
import { ChakraComponentProps } from '../../utils/types'
export const AdminHeaderContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    w: 'full',
    h: '70px',
    bg: 'prettyblue',
    paddingX: '5vw',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '2px solid',
    borderColor: '#e55800',
    boxShadow: '0 3px 15px #e55800',
  },
})

interface HeadingTextProps extends ChakraComponentProps {
  fontSize: string[]
}

export const HeadingText = ({ children, ...props }: HeadingTextProps) => (
  <Heading {...props} color={useColorModeValue('white', 'black')}>
    {children}
  </Heading>
)

export const AdminPageHeaderTitle = ({
  children,
  ...props
}: HeadingTextProps) => (
  <Text
    color={useColorModeValue('white', 'black')}
    {...props}
    fontWeight="bold"
  >
    {children}
  </Text>
)
