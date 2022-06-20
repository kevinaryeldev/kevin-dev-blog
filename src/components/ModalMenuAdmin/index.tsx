import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import ButtonDarkMode from '../ButtonDarkMode'

const ModalMenuAdmin = () => {
  return (
    <Menu>
      <MenuButton as={Button} bg="inherit">
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <ButtonDarkMode invert />
      </MenuList>
    </Menu>
  )
}
export default ModalMenuAdmin
