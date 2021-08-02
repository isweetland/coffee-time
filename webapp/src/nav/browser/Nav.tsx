import { Flex, Heading } from '@chakra-ui/layout'
import { Button, Spacer } from '@chakra-ui/react'
import React from 'react'

const Nav = () => {
    return (
        <Flex bg="dark.100" p={5} direction="column" h="100%" justify="space-between">
            <Heading color="brand.100" mb={10}>
                Coffee Time
            </Heading>
            <Flex direction="column" justify="space-evenly" h="xs">
                <Button>Nav 1</Button>
                <Button>Nav 2</Button>
                <Button>Nav 3</Button>
            </Flex>
            <Spacer />
        </Flex>
    )
}

export default Nav
