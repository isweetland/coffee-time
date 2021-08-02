import React, { useContext } from 'react'
import { Flex, Heading } from '@chakra-ui/layout'
import { Box, Center, Grid, HStack, IconButton, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react'
import AddMenuButton from '../components/AddMenuButton'
import SearchBar from '../components/SearchBar'
import BrowserContext from '../context/browser-context'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import AvatarMenuButton from '../components/AvatarMenuButton'

const Home = () => {
    const isBrowserLayout = useContext(BrowserContext)
    const { toggleColorMode } = useColorMode()
    const bg = useColorModeValue('light.200', 'dark.200')
    const cardBG = useColorModeValue('light.100', 'dark.100')
    const modeIcon = useColorModeValue(<MoonIcon />, <SunIcon />)

    return (
        <Grid
            templateRows="auto 1fr"
            bg={bg}
            p={5}
            gridGap={5}
            w="100%"
            h={['calc(100% - 60px)', null, '100vh']} // on mobile adjust for height of footer
            position="relative"
            overflow="auto"
        >
            <VStack>
                <HStack alignSelf="flex-end">
                    <AvatarMenuButton />
                    <IconButton
                        icon={modeIcon}
                        aria-label="Toggle Color Mode"
                        onClick={toggleColorMode}
                        bg="transparent"
                        _hover={{}}
                        _focus={{}}
                        _active={{}}
                    />
                </HStack>
                <SearchBar />
            </VStack>
            <Flex direction="column" p={2}>
                {Array(100)
                    .fill(null)
                    .map((x, i) => (
                        <Center
                            p={50}
                            mr={2}
                            mb={2}
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
            </Flex>
            <Box position="fixed" bottom={['60px', null, 0]} right={[0, null, 5]} p={5}>
                <AddMenuButton variant={isBrowserLayout ? 'browser' : 'mobile'} />
            </Box>
        </Grid>
    )
}

export default Home
