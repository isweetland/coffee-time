import { Flex, Heading } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import React from 'react'

const Nav = () => {
    return (
        <Flex
            bg="dark.100"
            direction="row"
            justify="space-evenly"
            align="center"
            h="60px"
            w="100%"
            position="fixed"
            bottom={0}
        >
            <Button>Nav 1</Button>
            <Button>Nav 2</Button>
            <Button>Nav 3</Button>
        </Flex>
    )
}

export default Nav
