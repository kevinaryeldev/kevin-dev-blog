import PageRouter from './PageRouter'
import './App.css'
import { Box, useColorModeValue } from '@chakra-ui/react'
function App() {
  return (
    <Box bg={useColorModeValue('white', 'black')} className="App">
      <PageRouter />
    </Box>
  )
}

export default App
