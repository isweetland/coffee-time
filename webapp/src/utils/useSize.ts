import { RefObject, useContext, useEffect, useLayoutEffect, useState } from 'react';
import ROContext from '../context/resize-observer';

const useSize = (ref: RefObject<HTMLElement>, { initialSize = [0, 0], mode = 'client' }: UseSizeConfig = {}) => {
    const { subscribe, unsubscribe } = useContext(ROContext);
    const [size, setSize] = useState<Size>(initialSize);

    useEffect(() => {
        if (!ref.current) return;
        subscribe(ref.current, (entry) => {
            const { width, height } = entry.contentRect;
            setSize([width, height]);
        });
        setSize([ref.current.offsetWidth, ref.current.offsetHeight]);
        return () => {
            if (!ref.current) return;
            unsubscribe(ref.current);
        };
    }, [ref.current]);
    return size;
};

type Width = number;
type Height = number;

export type UseSizeConfig = {
    initialSize?: Size;
    mode?: UseSizeModes;
};
export type Size = [Width, Height];
export type UseSizeModes = 'client' | 'scroll';

export default useSize;
