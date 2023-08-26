import { SunIcon } from '@chakra-ui/icons'
import { Box, Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import bolsocarrito from "../../assets/bolsocarrito.png"
const CartWidget = () => {
  
  return (
    <>
    <div>
      <Flex>
        <Box p="3">
         <img className='imgcarrito' src={bolsocarrito} alt="" />
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