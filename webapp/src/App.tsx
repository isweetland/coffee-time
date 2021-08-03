import { ChakraProvider, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import BrowserContext from './context/browser-context'
import Layout from './layout/Layout'
import theme from './theme/extendedTheme'

function App() {
    const [isLargerThan48em] = useMediaQuery('(min-width: 48em)')

    return (
        <ChakraProvider theme={theme}>
            <BrowserContext.Provider value={isLargerThan48em}>
                <Router>
                    <Layout />
                </Router>
            </BrowserContext.Provider>
        </ChakraProvider>
    )
}

export default App
