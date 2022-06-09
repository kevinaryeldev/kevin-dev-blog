import { Button, chakra } from '@chakra-ui/react'
import { darken, lighten } from '@chakra-ui/theme-tools'
import { NavLink } from 'react-router-dom'

export const HeaderLink = chakra(NavLink, {
  baseStyle: {
    _hover: {
      bg: '#f0ebe4',
      borderBottom: '3px solid #ff9626',
      color: 'black',
    },
    _active: {
      borderBottom: '3px solid #258EA6',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    minW: '100px',
    height: '40px',
    textDecor: 'none',
    fontSize: '1.5rem',
  },
})
