import { Box, Flex, FormControl, FormLabel } from '@chakra-ui/react'
import { InputFormPostStyle, TextAreaFormPostStyle } from './style'

interface PostMainProps {
  children: React.ReactNode
}

const PostMain = ({ children }: PostMainProps) => {
  return (
    <Box padding="5" borderRadius="lg">
      <Flex justify={['flex-start', 'space-around', 'flex-end']} gap={'5'}>
        {children}
      </Flex>
      <FormControl>
        <FormLabel>Título do Post</FormLabel>
        <InputFormPostStyle name="post-title" />
      </FormControl>
      <FormControl>
        <FormLabel>Subtítulo do Post</FormLabel>
        <InputFormPostStyle name="post-subtitle" />
      </FormControl>
      <FormControl>
        <FormLabel>Conteúdo Principal</FormLabel>
        <TextAreaFormPostStyle name="post-mainContent" />
      </FormControl>
      <FormControl>
        <FormLabel>Imagem do Post</FormLabel>
        <InputFormPostStyle name="post-Image" />
      </FormControl>
    </Box>
  )
}

export default PostMain
