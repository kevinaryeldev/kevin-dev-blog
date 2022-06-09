import { Box, Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import ButtonDarkMode from '../../../ButtonDarkMode'
import { HeaderLink } from './style'
const NavBar = () => {
  type linkStyleProps = {
    isActive: boolean
  }
  const linkStyle = ({ isActive }: linkStyleProps) => ({
    background: isActive ? useColorModeValue('#f0ebe4', '#1a1d1a') : '',
    borderBottom: isActive ? '3px solid #258ea6' : '',
  })

  return (
    <>
      <Flex
        as="nav"
        bg={'#ff9626'}
        overflow={'auto'}
        padding={'0 10px 0 10px'}
        w={'full'}
        justify={'space-between'}
      >
        <HStack spacing={0}>
          <Box>
            <HeaderLink style={linkStyle} to={'/'}>
              Home
            </HeaderLink>
          </Box>
          <Box>
            <HeaderLink style={linkStyle} to={'/posts'}>
              Posts
            </HeaderLink>
          </Box>
          <Box>
            <HeaderLink style={linkStyle} to={'/about'}>
              Sobre
            </HeaderLink>
          </Box>
          <Box>
            <HeaderLink style={linkStyle} to={'/contato'}>
              Contato
            </HeaderLink>
          </Box>
        </HStack>
        <ButtonDarkMode />
      </Flex>
    </>
  )
}
export default NavBar
