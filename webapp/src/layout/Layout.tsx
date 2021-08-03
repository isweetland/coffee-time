import { Flex, useColorModeValue } from '@chakra-ui/react'
import React, { useContext } from 'react'
import BrowserContext from '../context/browser-context'
import Header from '../header/Header'
import MobileNav from '../nav/mobile/Nav'
import AppRouter from '../routes'

const Layout = () => {
    const bg = useColorModeValue('light.200', 'dark.200')
    const isBrowserLayout = useContext(BrowserContext)
    return (
        <Flex direction="column" bg={bg} justify="space-between" w="100%" minHeight="100vh">
            <Flex direction="column" flex={1}>
                <Header />
                <AppRouter />
            </Flex>
            {!isBrowserLayout && <MobileNav />}
        </Flex>
    )
}

export default Layout
