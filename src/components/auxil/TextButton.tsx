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
        <div className={`container-text-button${ disable ? ' text-disabled' : '' }`} onClick={click}>
            <h4>{ text }</h4>
        </div>
    );
};

export default TextButton;
