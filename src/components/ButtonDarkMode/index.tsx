import { useColorMode } from '@chakra-ui/react'
import { BsSun, BsMoonStarsFill } from 'react-icons/bs'
import { ButtonDarkModeStyle } from './style'

interface ButtonDarkModeProps {
  invert?: boolean
}

const ButtonDarkMode = ({ invert }: ButtonDarkModeProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <ButtonDarkModeStyle
      aria-label="Toggle Color Mode"
      onClick={toggleColorMode}
      invert={!invert}
    >
      {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
    </ButtonDarkModeStyle>
  )
}
export default ButtonDarkMode
