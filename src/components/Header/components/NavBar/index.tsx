import { Flex, HStack, Switch } from '@chakra-ui/react'
import { BoxWrapper, HeaderLink } from './style'

const NavBar = () => {
  type linkStyleProps = {
    isActive: boolean
  }
  const linkStyle = ({ isActive }: linkStyleProps) => ({
    color: isActive ? '#9090FF' : 'inherit',
    background: isActive ? 'inherit' : '#9090FF',
  })
  return (
    <>
      <Flex
        as="nav"
        bg={'primary'}
        overflow={'auto'}
        padding={'0 10px 0 10px'}
        minW={'fit-content'}
      >
        <HStack spacing={0} w={'full'}>
          <BoxWrapper>
            <HeaderLink style={linkStyle} to={'/'}>
              Home
            </HeaderLink>
          </BoxWrapper>
          <BoxWrapper>
            <HeaderLink style={linkStyle} to={'/posts'}>
              Posts
            </HeaderLink>
          </BoxWrapper>
          <BoxWrapper>
            <HeaderLink style={linkStyle} to={'/about'}>
              Sobre
            </HeaderLink>
          </BoxWrapper>
          <BoxWrapper>
            <HeaderLink style={linkStyle} to={'/contato'}>
              Contato
            </HeaderLink>
          </BoxWrapper>
        </HStack>
        <Switch disabled alignSelf={'center'} />
      </Flex>
    </>
  )
}
export default NavBar
