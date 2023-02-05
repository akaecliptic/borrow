import { useState } from "react";
import { ToastyChannel, ToastyController, ToastyLength, ToastyState } from "types/alias";

const useToasty = (): ToastyController => {
    const [controller, setController] = useState<ToastyState>({
        message: '',
        channel: 'info',
        length: 'temp',
        show: false,
        callback: undefined
    });

    const update = (message: string, channel: ToastyChannel, length: ToastyLength, callback?: () => void ) => {
        setController( old => { return { message, channel, length, show: old.show, callback } } );
    };

    const syn = () => {
        setController( old => { return { ...old, show: true } } );
    };

    const ack = () => {
        setController( old => { return { ...old, show: false } } );
    };

    return [controller, { update, syn, ack } ];
};

export default useToasty;
