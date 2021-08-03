import React, { useContext } from 'react'
import { Flex, Heading } from '@chakra-ui/layout'
import { Box, Center, Grid, HStack, IconButton, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react'
import AddMenuButton from '../../components/AddMenuButton'
import SearchBar from '../../components/SearchBar'
import BrowserContext from '../../context/browser-context'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import AvatarMenuButton from '../../components/AvatarMenuButton'
import ThemeButton from '../../components/ThemeButton'

const Home = () => {
    const isBrowserLayout = useContext(BrowserContext)
    const bg = useColorModeValue('light.200', 'dark.200')
    const cardBG = useColorModeValue('light.100', 'dark.100')

    return (
        <Flex direction="column" flex={1} bg={bg} py={5} px="10%" w="100%">
            <SearchBar />
            <VStack direction="column" p={[2, null, 5, 6, 7]}>
                {Array(10)
                    .fill(null)
                    .map((x, i) => (
                        <Center
                            p={50}
                            w="100%"
                            key={i}
                            boxShadow="xl"
                            bg={cardBG}
                            border="2px"
                            borderColor="transparent"
                            _hover={{ borderColor: 'accent' }}
                            transitionProperty="common"
                            transitionDuration="normal"
                        >
                            {i}
                        </Center>
                    ))}
            </VStack>
            <Box position="fixed" bottom={['60px', null, 10]} right={[5, 5, 10]}>
                <AddMenuButton variant={isBrowserLayout ? 'browser' : 'mobile'} />
            </Box>
        </Flex>
    )
}

export default Home
