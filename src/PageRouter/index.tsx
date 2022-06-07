import { Routes, Route } from 'react-router-dom'
import Login from '../pages/admin/login'
import Register from '../pages/admin/register'
import Home from './../pages/user/home'
const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default PageRouter
