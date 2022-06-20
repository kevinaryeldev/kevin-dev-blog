import { Box } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import AdminHeader from '../../../../components/AdminHeader'
import ModalMenuAdmin from '../../../../components/ModalMenuAdmin'
import { PageWrapper } from '../../../../style/styledComponents'
import loginSchema from '../../../../utils/schemas/login'
import { ButtonAdminStyle } from '../../login/style2'
import PostMain from '../components/PostMain'
import PostSection from '../components/PostSection'
import { SectionButton } from './style'
const CreatePostPage = () => {
  const [sectionCount, setSectionCount] = useState(0)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) })

  const getData = (data: string, {}) => {
    console.log(data)
  }

  return (
    <PageWrapper>
      <AdminHeader pageTitle="Criar Post">
        <ModalMenuAdmin />
      </AdminHeader>
      <Box
        w={'90%'}
        paddingX="5"
        paddingY="10"
        as="form"
        //onSubmit={handleSubmit(getData)}
      >
        <PostMain>
          {sectionCount > 0 && (
            <SectionButton
              bgcol="#59114d"
              onClick={() => setSectionCount(sectionCount + -1)}
            >
              Remover seção
            </SectionButton>
          )}
          <SectionButton
            bgcol="#ff9626"
            onClick={() => setSectionCount(sectionCount + 1)}
          >
            Adicionar seção
          </SectionButton>
        </PostMain>
        {[...Array(sectionCount)].map((value, index: number) => (
          <PostSection
            key={'CreateSection' + index}
            id={'Section' + (index + 1)}
            num={index + 1}
          />
        ))}
        <ButtonAdminStyle type="submit">Enviar Post</ButtonAdminStyle>
      </Box>
    </PageWrapper>
  )
}
export default CreatePostPage
