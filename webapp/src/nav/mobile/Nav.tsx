import { Flex } from '@chakra-ui/layout';
import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import NavOptions from '../NavOptions';

const Nav = () => {
    const bg = useColorModeValue('light.100', 'dark.100');
    return (
        <Flex
            bg={bg}
            direction="row"
            justify="space-evenly"
            align="center"
            h="60px"
            position="sticky"
            bottom={0}
            w="100%"
            zIndex={2}
        >
            <NavOptions />
        </Flex>
    );
};

export default Nav;
