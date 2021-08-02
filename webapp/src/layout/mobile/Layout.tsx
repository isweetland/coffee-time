import { Grid } from '@chakra-ui/layout'
import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Nav from '../../nav/mobile/Nav'
import Home from '../../pages/Home'

const Layout = () => {
    const bg = useColorModeValue('light.200', 'dark.200')
    return (
        <Box h="100vh" w="100%" bg={bg}>
            <Home />
            <Nav />
        </Box>
    )
}

export default Layout
