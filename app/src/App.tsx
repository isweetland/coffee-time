import { ChakraProvider, extendTheme, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import './App.css'
import BrowserContext from './context/browser-context'
import BrowserLayout from './layout/browser/Layout'
import MobileLayout from './layout/mobile/Layout'
import themeObject from './theme/extendedTheme'

const theme = extendTheme(themeObject)

function App() {
    const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

    return (
        <ChakraProvider theme={theme}>
            <BrowserContext.Provider value={isLargerThan600}>
                {isLargerThan600 ? <BrowserLayout /> : <MobileLayout />}
            </BrowserContext.Provider>
        </ChakraProvider>
    )
}

export default App
