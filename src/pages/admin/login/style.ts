import { Box, Center, chakra, IconButton, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const FormWrapper = chakra(Center, {
  baseStyle: {
    flexGrow: '1',
  },
})

export const FormContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center',
    padding: [4, 5, 6],
    borderRadius: 'xl',
    minW: '320px',
    gap: [5, 6, 7],
  },
})

export const IconRightPassword = chakra(IconButton, {
  baseStyle: {
    ariaLabel: 'password visibility',
    h: '1.75rem',
    size: 'sm',
  },
})

export const TextOr = chakra(Text, {
  baseStyle: {
    size: '2xs',
    textAlign: 'center',
  },
})

export const LinkSignup = chakra(NavLink, {
  baseStyle: {
    bgColor: 'inherit',
  },
})
