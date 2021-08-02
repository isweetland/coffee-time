import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

const SearchBar = () => {
    const [focused, setFocus] = useState(false)
    const color = useColorModeValue('lightFont', 'darkFont')

    return (
        <InputGroup size="lg" borderColor={color}>
            <InputLeftElement
                pointerEvents="none"
                children={
                    <SearchIcon
                        color={focused ? 'accent' : ''}
                        transitionProperty="common"
                        transitionDuration="normal"
                    />
                }
            />
            <Input
                focusBorderColor="accent"
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                _hover={{}}
            />
        </InputGroup>
    )
}

export default SearchBar
