import { chakra, Box } from '@chakra-ui/react'

export const PageWrapper = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDir: 'column',
    alignItems: 'center',
    minH: '100vh',
    minW: '100vw',
  },
})
