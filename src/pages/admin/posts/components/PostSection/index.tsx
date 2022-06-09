import { Box, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'

interface PostSectionProps {
  key: string
  id: string
}

const PostSection = ({ id }: PostSectionProps) => {
  return (
    <Box w={'100%'} border="2px solid primary" padding="4" bg="primary">
      <FormControl>
        <FormLabel color="#f0ebe4">Título da seção</FormLabel>
        <Input w={['2xs', 'xs', 'sm', 'md']} fontSize="xl" bg="white" />
      </FormControl>
      <FormControl>
        <FormLabel color="#f0ebe4">SubTítulo da seção</FormLabel>
        <Input></Input>
      </FormControl>
      <FormControl>
        <FormLabel color="#f0ebe4">Imagem do Topo</FormLabel>
        <Input></Input>
      </FormControl>
      <FormControl>
        <FormLabel color="#f0ebe4">Conteúdo</FormLabel>
        <Textarea h={['2xs', 'xs', 'xs']} resize="none"></Textarea>
      </FormControl>
      <FormControl>
        <FormLabel color="#f0ebe4">Imagem de rodapé</FormLabel>
        <Input></Input>
      </FormControl>
    </Box>
  )
}
export default PostSection
