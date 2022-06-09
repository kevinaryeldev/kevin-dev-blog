import { Box, Flex, useColorModeValue, useColorMode } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { BlogTitle, MainHeader } from './style'

const Header = () => {
  const { colorMode } = useColorMode()
  return (
    <>
      <MainHeader bgColor={useColorModeValue('white', 'black')}>
        <Flex minH={'170px'}>
          <Box ml={'10%'} mt={'5%'}>
            <BlogTitle color={useColorModeValue('black', 'white')}>
              Kevin_dev.Blog
            </BlogTitle>
          </Box>
        </Flex>
      </MainHeader>
      <NavBar />
    </>
  )
}
export default Header
