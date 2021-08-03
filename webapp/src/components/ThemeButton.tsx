import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ThemeButton = () => {
    const { toggleColorMode } = useColorMode()
    const modeIcon = useColorModeValue(<MoonIcon />, <SunIcon />)
    return (
        <IconButton
            icon={modeIcon}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
            bg="transparent"
            _hover={{}}
            _focus={{}}
            _active={{}}
        />
    )
}

export default ThemeButton
