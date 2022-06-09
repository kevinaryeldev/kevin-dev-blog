import ModalMenuAdmin from '../ModalMenuAdmin'
import {
  AdminHeaderContainer,
  AdminPageHeaderTitle,
  HeadingText,
} from './style'

interface AdminHeaderProps {
  pageTitle: string
  children?: React.ReactNode
}
const AdminHeader = ({ pageTitle, children }: AdminHeaderProps) => {
  return (
    <AdminHeaderContainer as="header">
      <HeadingText fontSize={['lg', '2xl', '3xl']}>Kevin_dev.Blog</HeadingText>
      <AdminPageHeaderTitle fontSize={['sm', 'xl', '2xl']}>
        {pageTitle}
      </AdminPageHeaderTitle>
      {children}
    </AdminHeaderContainer>
  )
}
export default AdminHeader
