import { Box, Flex } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { BlogTitle, MainHeader } from './style'

const Header = () => {
  return (
    <>
      <MainHeader bgColor={'#001126'}>
        <Flex minH={'200px'}>
          <Box ml={'10%'} mt={'5%'}>
            <BlogTitle>Kevin_dev.Blog</BlogTitle>
          </Box>
        </Flex>
      </MainHeader>
      <NavBar />
    </>
  )
}
export default Header
