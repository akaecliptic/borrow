import { FC, useEffect, useRef } from "react";
import { MdCancel, MdError, MdInfo, MdWarning } from "react-icons/md";
import { ToastyActions, ToastyState } from "types/alias";
import { VoidConsumer } from "types/functions";
import "styles/components/Toasty.scss";

export type PropToasty = {
    state: ToastyState;
    actions: ToastyActions;
};

const Toasty: FC<PropToasty> = ({ state, actions }) => {

    const timeout = useRef<NodeJS.Timeout>();

    useEffect(() => {
        if (!state.show) return;

        const duration: number = (state.length === 'perm') ? 300000 : 2500;
        const cancel: HTMLElement = document.getElementById('toasty-cancel') as HTMLElement;

        const dismiss: VoidConsumer = () => {
            actions.ack();
            cancel.removeEventListener('click', dismiss);
            clearTimeout(timeout.current);
            if (state.callback) state.callback();
        };
        
        timeout.current = setTimeout(dismiss, duration);
        cancel.addEventListener('click', dismiss);

        return () => dismiss();
    }, [state, actions]);
    
    const icon = () => {
        switch (state.channel) {
            case 'error':
                return <MdError />
            case 'warn':
                return <MdWarning />
            case 'info':
                return <MdInfo />
        }
    };

    if (!state.show) return <></>;

    return (
        <div className={`toasty-${state.channel} ${state.length}`}>
            {icon()}
            <h5>{state.message}</h5>
            <MdCancel className='cancel' id='toasty-cancel' />
        </div>
    );
};

export default Toasty;
