import { ChakraProvider, extendTheme, ThemeConfig, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import BrowserContext from './context/browser-context';
import ROContext from './context/resize-observer';
import Layout from './layout/Layout';
import themeGenerator from './theme/extendedTheme';
import useResizeObserver from './utils/useResizeObserver';

function App() {
    const [isLargerThan48em] = useMediaQuery('(min-width: 48em)');
    const ro = useResizeObserver();

    return (
        <ChakraProvider theme={themeGenerator({ isBrowser: isLargerThan48em })}>
            <BrowserContext.Provider value={isLargerThan48em}>
                <ROContext.Provider value={ro}>
                    <Router>
                        <Layout />
                    </Router>
                </ROContext.Provider>
            </BrowserContext.Provider>
        </ChakraProvider>
    );
}

export default App;
