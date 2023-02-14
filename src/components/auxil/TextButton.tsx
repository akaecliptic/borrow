import { FC } from "react";
import { VoidConsumer } from "types/functions";
import "styles/components/TextButton.scss";

export type PropTextButton = {
    text: string;
    click: VoidConsumer;
    disable?: boolean
};

const TextButton: FC<PropTextButton> = ({ text, click, disable = false }) => {
    return (
        <button className={`container-text-button${ disable ? ' text-disabled' : '' }`} onClick={click}>
            <h3>{ text }</h3>
        </button>
    );
};

export default TextButton;
