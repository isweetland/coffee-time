import { useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = () => {
    const { current: handlers } = useRef<Map<Element, UseResizeObserverEventHandler>>(new Map());
    const { current: resizeObserver } = useRef(
        new ResizeObserver((entries, observer) => {
            for (let entry of entries) {
                handlers.get(entry.target)?.(entry, observer);
            }
        })
    );

    useEffect(() => {
        return () => {
            resizeObserver.disconnect();
            handlers.clear();
        };
    }, []);

    const subscribe = (target: Element, eventHandler: UseResizeObserverEventHandler) => {
        if (handlers.has(target)) {
            resizeObserver.unobserve(target);
        }
        resizeObserver.observe(target);
        handlers.set(target, eventHandler);
    };

    const unsubscribe = (target: Element) => {
        resizeObserver.unobserve(target);
        handlers.delete(target);
    };

    return { subscribe, unsubscribe };
};

export type UseResizeObserverEventHandler = (entry: ResizeObserverEntry, observer: ResizeObserver) => void;
export default useResizeObserver;
