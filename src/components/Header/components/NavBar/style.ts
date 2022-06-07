import { Box, chakra } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

export const HeaderLink = chakra(NavLink, {
  baseStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    minW: '120px',
    height: '40px',
    textDecor: 'none',
    fontSize: '1.5rem',
  },
})
export const BoxWrapper = chakra(Box, {
  baseStyle: {
    _hover: {
      color: '#CCC0B8',
      bg: '#202030',
    },
    _active: {
      color: 'white',
    },
  },
})
