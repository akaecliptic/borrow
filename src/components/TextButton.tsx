import { FC } from "react";
import { VoidConsumer } from "types/functions";
import "styles/modules/TextButton.scss";

export type PropTextButton = {
    text: string;
    click: VoidConsumer;
};

const TextButton: FC<PropTextButton> = ({ text, click }) => {

    return (
        <div className='container-text-button' onClick={click}>
            <h4>{ text }</h4>
        </div>
    );
};

export default TextButton;
