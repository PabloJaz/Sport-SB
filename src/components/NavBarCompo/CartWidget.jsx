
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import bolsocarrito from "../../assets/bolsocarrito.png"
import { Link } from 'react-router-dom'


const CartWidget = () => {
  
  return (
    <>
    <div>
      <Flex>
        <Box p="3">
        <Link to={"/cart"}>
         <img className='imgcarrito' src={bolsocarrito} alt="" />
         </Link>
        </Box> 
        <Box p="5">
          <p><b>6</b></p>
        </Box>
      </Flex>    
    </div>
    </>
  )
}

export default CartWidget