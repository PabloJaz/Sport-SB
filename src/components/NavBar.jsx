

import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem, Flex, Box, Spacer,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import logo from "../../src/assets/logo.jpg"


const NavBar =() => {
  return (
    <div className='navbar'>
      <Flex>
        <Box p="4">
        <img className='logo'
          src={logo} 
          alt="" 
          />
        </Box>
        <Box p="7">
        <Menu>
          <MenuButton>
          <b>Categori</b>
          </MenuButton>
        <MenuList>
          <MenuItem>Man</MenuItem>
          <MenuItem>Woman</MenuItem>
        </MenuList>
         </Menu>
        </Box>
        <Spacer />
        <Box p="4">
        <CartWidget/>
        </Box>
      </Flex>
      
        
      



    </div>
  )
}

export default NavBar