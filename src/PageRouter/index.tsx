import { Routes, Route } from 'react-router-dom'
import Login from '../pages/admin/login'
import Home from './../pages/user/home'
const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/admin" element={<Login />} />
      </Routes>
    </>
  )
}

export default PageRouter
