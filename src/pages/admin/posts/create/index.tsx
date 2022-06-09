import { Box, Button } from '@chakra-ui/react'
import { useState } from 'react'
import AdminHeader from '../../../../components/AdminHeader'
import ModalMenuAdmin from '../../../../components/ModalMenuAdmin'
import { PageWrapper } from '../../../../style/styledComponents'
import PostMain from '../components/PostMain'
import PostSection from '../components/PostSection'
const CreatePostPage = () => {
  const [sectionCount, setSectionCount] = useState(0)
  return (
    <PageWrapper>
      <AdminHeader pageTitle="Criar Post">
        <ModalMenuAdmin />
      </AdminHeader>
      <Box w={'90%'} paddingX="5" paddingY="10">
        <PostMain>
          {sectionCount > 0 && (
            <Button
              bg="#000"
              color="#f0ebe4"
              onClick={() => setSectionCount(sectionCount + -1)}
            >
              Remover seção
            </Button>
          )}
          <Button
            bg="#000"
            color="#f0ebe4"
            onClick={() => setSectionCount(sectionCount + 1)}
          >
            Adicionar seção
          </Button>
        </PostMain>
        {[...Array(sectionCount)].map((value, index: number) => (
          <PostSection
            key={'CreateSection' + index}
            id={'Section' + index + 1}
          />
        ))}
      </Box>
    </PageWrapper>
  )
}
export default CreatePostPage
