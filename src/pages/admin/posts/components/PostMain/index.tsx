import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from '@chakra-ui/react'

interface PostMainProps {
  children: React.ReactNode
}

const PostMain = ({ children }: PostMainProps) => {
  return (
    <Box bg="#f0ebe4" padding="5" borderRadius="lg">
      <Flex justify="space-between">
        <Heading>Principal</Heading>
        {children}
      </Flex>
      <FormControl>
        <FormLabel color="#f0ebe4">Título do Post</FormLabel>
        <Input w={['2xs', 'xs', 'sm', 'md']} fontSize="xl" bg="white" />
      </FormControl>
      <FormControl>
        <FormLabel color="#f0ebe4">SubTítulo do Post</FormLabel>
        <Input w={['2xs', 'xs', 'sm', 'md']} fontSize="xl" bg="white" />
      </FormControl>
      <FormControl>
        <FormLabel color="#f0ebe4">Conteúdo Principal</FormLabel>
        <Textarea h={['2xs', 'xs', 'xs']} resize="none"></Textarea>
      </FormControl>
      <FormControl>
        <FormLabel color="#f0ebe4">Imagem do Post</FormLabel>
        <Input></Input>
      </FormControl>
    </Box>
  )
}

export default PostMain
