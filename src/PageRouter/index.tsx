import { Routes, Route } from 'react-router-dom'
import Login from '../pages/admin/login'
import CreatePostPage from '../pages/admin/posts/create'
import Register from '../pages/admin/register'
import Home from './../pages/user/home'
const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/posts/create" element={<CreatePostPage />} />
      </Routes>
    </>
  )
}

export default PageRouter
