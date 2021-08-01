import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

const SearchBar = () => {
    const [focused, setFocus] = useState(false)

    return (
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
            />
            <Input focusBorderColor="accent" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
        </InputGroup>
    )
}

export default SearchBar
