import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    
    <div className='greeting'>
        <Flex>
            <Box> 
            <b>{greeting}</b>
            </Box> 
        </Flex>  
    </div>

  )
}

export default ItemListContainer