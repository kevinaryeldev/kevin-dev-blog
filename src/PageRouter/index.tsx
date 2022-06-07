import { Routes, Route } from 'react-router-dom'
import Home from './../pages/user/home'
const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default PageRouter
