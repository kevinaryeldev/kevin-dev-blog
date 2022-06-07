import { Box, chakra, Heading } from '@chakra-ui/react'

export const MainHeader = chakra(Box, {
  baseStyle: {
    bg: 'url(https://www.linkpicture.com/q/Banner-React-Small.png) top right no-repeat ',
    opacity: 0.9,
  },
})

export const BlogTitle = chakra(Heading, {
  baseStyle: {
    bgColor: 'rgba(0, 0, 0, 0.8)',
    boxShadow: ' 5px 5px 5px rgba(0, 0, 0, 0.4)',
    color: 'lilight',
    padding: '2px 5px',
    borderRadius: '5px',
  },
})
