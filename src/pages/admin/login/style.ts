import {
  Box,
  Button,
  Center,
  chakra,
  FormControl,
  Heading,
  IconButton,
  Input,
  Text,
} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

import { mode, darken, lighten } from '@chakra-ui/theme-tools'

export const FormWrapper = chakra(Center, {
  baseStyle: {
    minH: 'full',
  },
})

export const FormContainer = chakra(Box, {
  baseStyle: {
    display: 'flex',
    flexDir: 'column',
    padding: [8, 10, 12],
    bg: '#f7dece',
    borderRadius: 'xl',
    minW: '320px',
    gap: [5, 6, 7],
  },
})

export const FormTitle = chakra(Heading, {
  baseStyle: {
    fontSize: ['2xl', '2xl', '3xl'],
    color: 'primary',
    textAlign: 'center',

    fontWeight: '700',
  },
})

export const InputWrapper = chakra(FormControl, {
  baseStyle: {
    color: 'secondary',
  },
})

export const InputStyled = chakra(Input, {
  baseStyle: {
    borderColor: 'primary',
    bg: 'inherit',
    pr: '4.5rem',
  },
})

export const IconRightPassword = chakra(IconButton, {
  baseStyle: {
    ariaLabel: 'password visibility',
    h: '1.75rem',
    size: 'sm',
  },
})

export const ButtonSubmit = chakra(Button, {
  baseStyle: {
    w: 'full',
  },
})

export const TextOr = chakra(Text, {
  baseStyle: {
    size: '2xs',
    textAlign: 'center',
  },
})

export const LinkWrapper = chakra(Box, {
  baseStyle: {
    padding: 3,
    borderRadius: 'xl',
    alignSelf: 'center',
    w: 'fit-content',
    _hover: {
      bgColor: darken('#f7dece', 10),
    },
  },
})

export const LinkSignup = chakra(NavLink, {
  baseStyle: {
    color: 'primary',
    bgColor: 'inherit',
  },
})
