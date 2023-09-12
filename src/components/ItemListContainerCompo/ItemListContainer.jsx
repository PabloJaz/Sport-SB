import { Box, Flex } from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
 
 

    const getProducts = async () =>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      
      return data
    }

    const [product, sertProduct]= useState([])
    

    useEffect(()=>{
        getProducts().then((product)=> sertProduct(product))

    },[])

  getProducts()

  return (
    <>
        <ItemList product={product}/>

    <div className='greeting'>
        <Flex>
            <Box> 
            <b>{greeting}</b>
            </Box> 
        </Flex>  
    </div>
    <ItemCount/>
    </>
  )
}

export default ItemListContainer