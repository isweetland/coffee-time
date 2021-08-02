import { Flex, Heading } from '@chakra-ui/layout'
import { Button, Spacer, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Nav = () => {
    const bg = useColorModeValue('light.100', 'dark.100')
    return (
        <Flex bg={bg} p={5} direction="column" h="100vh" justify="space-between">
            <Heading color="brand.100" mb={10}>
                Coffee Time
            </Heading>
            <Flex direction="column" justify="space-evenly" h="xs">
                <Button>Nav 1</Button>
                <Button>Nav 2</Button>
                <Button>Nav 3</Button>
                <Button>Nav 4</Button>
            </Flex>
            <Spacer />
        </Flex>
    )
}

export default Nav
