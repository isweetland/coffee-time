import { SearchIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';

const SearchBar = () => {
    const [focused, setFocus] = useState(false);
    const color = useColorModeValue('lightFont', 'darkFont');

    return (
        <Box position="relative">
            <InputGroup size="lg">
                <InputLeftElement
                    pointerEvents="none"
                    children={
                        <SearchIcon
                            color={focused ? 'accent' : ''}
                            transitionProperty="common"
                            transitionDuration="normal"
                        />
                    }
                    zIndex={1}
                />
                <Input onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
            </InputGroup>
        </Box>
    );
};

export default SearchBar;
