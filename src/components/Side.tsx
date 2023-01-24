import { FC } from "react";
import "styles/components/Side.scss";
import { VoidConsumer } from "types/functions";

const Side: FC<{}> = () => {

    const toggleSide: VoidConsumer = ( ) => {
        const aside = document.getElementById('aside') as HTMLElement;
        aside.classList.toggle('open-side');
    };

    return (
        <aside id='aside'>
            <div id='container-side'></div>
            <img 
                id='mark-side' 
                src='images/mark.svg' 
                alt='Side book mark' 
                onClick={toggleSide}/>
            <div id='overlay-side' onClick={toggleSide}/>
        </aside>
    );
};

export default Side;
