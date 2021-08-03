import { Flex } from '@chakra-ui/layout'
import { HStack, Spacer, useColorModeValue } from '@chakra-ui/react'
import NavOptions from '../NavOptions'

const Nav = () => {
    const bg = useColorModeValue('light.100', 'dark.100')

    return (
        <HStack spacing={5}>
            <NavOptions />
        </HStack>
    )
}

export default Nav
