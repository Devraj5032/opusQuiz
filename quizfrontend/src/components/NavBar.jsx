import { Box } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Box bgColor='blue.700' minH='8vh' w="100vw" display='flex' justifyContent='center' alignItems='center'>
        <img src={logo} alt='img' style={{width: '200px'}}/>
    </Box>
  )
}

export default NavBar