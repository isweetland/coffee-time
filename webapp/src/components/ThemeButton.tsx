import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const ThemeButton = () => {
    const { toggleColorMode } = useColorMode();
    const modeIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
    const color = useColorModeValue('lightFont', 'darkFont');
    return (
        <IconButton
            icon={modeIcon}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            bg="transparent"
            color={color}
            _hover={{}}
            _focus={{}}
            _active={{}}
        />
    );
};

export default ThemeButton;
