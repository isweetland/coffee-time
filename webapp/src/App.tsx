import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import './App.css'
import BrowserContext from './context/browser-context'
import BrowserLayout from './layout/browser/Layout'
import MobileLayout from './layout/mobile/Layout'
import theme from './theme/extendedTheme'

function App() {
    const [isLargerThan48em] = useMediaQuery('(min-width: 48em)')

    return (
        <ChakraProvider theme={theme}>
            <BrowserContext.Provider value={isLargerThan48em}>
                {isLargerThan48em ? <BrowserLayout /> : <MobileLayout />}
            </BrowserContext.Provider>
        </ChakraProvider>
    )
}

export default App
