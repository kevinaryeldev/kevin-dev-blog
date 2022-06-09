import { Box, chakra, Heading, useColorMode } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const MainHeader = chakra(Box, {
  baseStyle: {
    bg: 'url(https://www.linkpicture.com/q/Banner-React-Small.png) top right no-repeat',
    opacity: '0.9',
    borderTop: '10px solid #ff9626',
  },
})

export const BlogTitle = chakra(Heading, {
  baseStyle: {
    padding: '3px 5px',
    borderRadius: 'xl',
  },
})
