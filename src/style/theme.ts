import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const theme = extendTheme({
  config,
  colors: {
    white: '#f0ebe4',
    white10: '#d6c7de',
    white20: '#c0a9cd',
    primary: '#151525',
    lilight: '#9090FF',
    secondary: '#304256',
    terciary: '#345d6b',
    error: '#A20623',
    positive: '#419D78',
    prettyblue: '#258EA6',
    black: '#1a1d1a',
  },
})

export default theme
