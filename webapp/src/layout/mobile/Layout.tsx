import { Grid } from '@chakra-ui/layout'
import React from 'react'
import Nav from '../../nav/mobile/Nav'
import Home from '../../pages/Home'

const Layout = () => {
    return (
        <Grid templateRows="1fr auto" templateColumns="1fr" h="100%" w="100%" position="fixed">
            <Home />
            <Nav />
        </Grid>
    )
}

export default Layout
