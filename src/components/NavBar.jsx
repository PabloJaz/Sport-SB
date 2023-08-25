
// import React from 'react'
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   Flex,Box, Spacer,
// } from '@chakra-ui/react'
// import CartWidget from './CartWidget'

// const NavBar = () => {
//   return (
//     <div>
//       <Flex>
//         <Box p='4'>
//         <h3>Style Black</h3>
//         </Box>
//         <Spacer />
//         <Box p='4'>
//           <Menu>
//             <MenuButton>
//              Categori
//             </MenuButton>
//             <MenuList>
//             <MenuItem>Men</MenuItem>
//             <MenuItem>Women</MenuItem>
//             <MenuItem>Contact</MenuItem>
//             </MenuList>
//           </Menu>       
//         </Box>
//         <CartWidget/> 
//       </Flex>
//     </div>
//   )
// }

// export default NavBar

import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const NavBar =() => {
  return (
    <div>
      <div>
        
      </div>
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
        Categorias
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Contact</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default NavBar