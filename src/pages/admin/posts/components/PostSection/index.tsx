import { FormControl, FormLabel } from '@chakra-ui/react'
import { InputFormPostStyle, TextAreaFormPostStyle } from '../PostMain/style'
import { DecorationPost, PostSectionContainer } from './style'

interface PostSectionProps {
  key: string
  id: string
  num: number
}

const PostSection = ({ id, num }: PostSectionProps) => {
  return (
    <>
      <DecorationPost />

      <PostSectionContainer>
        <FormControl>
          <FormLabel>Título da seção {num}</FormLabel>
          <InputFormPostStyle name={id + '-title'} />
        </FormControl>
        <FormControl>
          <FormLabel>SubTítulo da seção {num}</FormLabel>
          <InputFormPostStyle name={id + '-subtitle'} />
        </FormControl>
        <FormControl>
          <FormLabel>Imagem do Topo</FormLabel>
          <InputFormPostStyle name={id + 'top-image'} />
        </FormControl>
        <FormControl>
          <FormLabel>Conteúdo da seção {num}</FormLabel>
          <TextAreaFormPostStyle name={id + 'content'} />
        </FormControl>
        <FormControl>
          <FormLabel>Imagem de rodapé</FormLabel>
          <InputFormPostStyle name={id + 'botton-image'} />
        </FormControl>
      </PostSectionContainer>
    </>
  )
}
export default PostSection
