import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}
const theme = extendTheme({
  config,
  colors: {
    primary: '#151525',
    lilight: '#9090FF',
    secondary: '#304256',
    terciary: '#345d6b',
    error: '#A20623',
    positive: '#419D78',
  },
})

export default theme
