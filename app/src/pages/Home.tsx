import React, { useContext } from 'react'
import { Flex, Heading } from '@chakra-ui/layout'
import { Box, Grid, useMediaQuery } from '@chakra-ui/react'
import AddMenuButton from '../components/AddMenuButton'
import SearchBar from '../components/SearchBar'
import BrowserContext from '../context/browser-context'

const Home = () => {
    const isBrowser = useContext(BrowserContext)

    return (
        <Grid
            templateRows="auto 1fr"
            bg="dark.200"
            p={5}
            gridGap={5}
            w="100%"
            overflow="auto"
            h={isBrowser ? '100%' : 'calc(100% - 60px)'}
            position="relative"
        >
            <Flex direction="column" w="100%" justify="flex-end">
                <Heading color="brand.100" alignSelf="flex-end" mb={1}>
                    USER
                </Heading>
                <SearchBar />
            </Flex>
            <Flex direction="column" overflow="auto"></Flex>
            <Box position="fixed" bottom={isBrowser ? 0 : '60px'} right={5} p={5}>
                <AddMenuButton variant={isBrowser ? 'browser' : 'mobile'} />
            </Box>
        </Grid>
    )
}

export default Home
