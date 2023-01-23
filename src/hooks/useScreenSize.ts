import { useEffect, useState } from "react";
import { ScreenSize } from "types/alias";
import { VoidConsumer } from "types/functions";

const useScreenSize = () => {

    const [ size, setSize ] = useState<ScreenSize>({ width: window.innerWidth, height:  window.innerHeight });
    const onResize: VoidConsumer = () => setSize({ width: window.innerWidth, height:  window.innerHeight });

    useEffect( () => {
        document.addEventListener('resize', onResize);

        return () => { document.removeEventListener('resize', onResize); };
    }, []);

    return size;
}

// CONSIDER: Moving into a collective config file
export const BreakPoint = {
    small: 750,
    medium: 900
};

export default useScreenSize;
