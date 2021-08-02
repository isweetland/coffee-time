import { Grid } from '@chakra-ui/layout'
import React from 'react'
import Nav from '../../nav/browser/Nav'
import Home from '../../pages/Home'

const Layout = () => {
    return (
        <Grid templateColumns="auto 1fr" h="100vh" w="100%">
            <Nav />
            <Home />
        </Grid>
    )
}

export default Layout
