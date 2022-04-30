import { ChakraProvider, extendTheme, ThemeConfig, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import BrowserContext from './context/browser-context';
import ResizeObserverContext from './context/resize-observer';
import Layout from './layout/Layout';
import themeGenerator from './theme/extendedTheme';
import useResizeObserver from './utils/useResizeObserver';

function App() {
    const [isLargerThan48em] = useMediaQuery('(min-width: 48em)');
    const resizeObserver = useResizeObserver();

    return (
        <ChakraProvider theme={themeGenerator({ isBrowser: isLargerThan48em })}>
            <BrowserContext.Provider value={isLargerThan48em}>
                <ResizeObserverContext.Provider value={resizeObserver}>
                    <Router>
                        <Layout />
                    </Router>
                </ResizeObserverContext.Provider>
            </BrowserContext.Provider>
        </ChakraProvider>
    );
}

export default App;
