import { Box, Flex, Heading, HStack, useColorModeValue } from '@chakra-ui/react'
import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import AvatarMenuButton from '../components/AvatarMenuButton'
import ThemeButton from '../components/ThemeButton'
import BrowserContext from '../context/browser-context'
import BrowserNav from '../nav/browser/Nav'

const Header = () => {
    const isBrowserLayout = useContext(BrowserContext)
    const bg = useColorModeValue('light.100', 'dark.100')
    const history = useHistory()

    const goHome = () => {
        if (window.location.pathname !== '/') history.push('/')
        else history.replace('/')
    }

    return (
        <Box position="sticky" top={0} bg={bg} zIndex={2} w="100%" overflow="hidden">
            <Flex direction="row" w="100%" justify="space-between" align="center" py={2} px={4}>
                <Heading color="brand.100" onClick={goHome} _hover={{ cursor: 'pointer' }}>
                    Coffee Time
                </Heading>
                <HStack spacing={4}>
                    {isBrowserLayout && <BrowserNav />}
                    <HStack>
                        <AvatarMenuButton variant={isBrowserLayout ? 'browser' : 'mobile'} />
                        <ThemeButton />
                    </HStack>
                </HStack>
            </Flex>
        </Box>
    )
}

export default Header
