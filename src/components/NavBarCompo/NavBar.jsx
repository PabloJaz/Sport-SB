

import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem, Flex, Box, Spacer,
} from '@chakra-ui/react'
import CartWidget from './CartWidget'
import logo from "../../assets/logo.jpg"
import { Link } from 'react-router-dom'

const NavBar =() => {
  return (
    <div className='navbar'>
      <Flex>
        <Box p="4">
          <Link to={"/"}> 
        <img className='logo'
          src={logo} 
          alt="" 
          />
          </Link>
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