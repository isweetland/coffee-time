import { createContext } from 'react';
import useResizeObserver from '../utils/useResizeObserver';

const ROContext = createContext<ReturnType<typeof useResizeObserver>>({
    subscribe: () => {},
    unsubscribe: () => {},
});

export default ROContext;
