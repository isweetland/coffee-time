import { createContext } from 'react';
import useResizeObserver from '../utils/useResizeObserver';

const ResizeObserverContext = createContext<ReturnType<typeof useResizeObserver>>({
    subscribe: () => {},
    unsubscribe: () => {},
});

export default ResizeObserverContext;
