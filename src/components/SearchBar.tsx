import { FC } from "react";
import { FiSearch } from "react-icons/fi";
import { OnChangeListener, VoidConsumer } from "types/functions";
import "styles/modules/SearchBar.scss";

const SearchBar: FC<{}> = () => {

    const click: VoidConsumer = ( ) => {
        const textArea = document.getElementById('input-search') as HTMLInputElement;
        textArea.disabled = false;
        textArea.focus();
        textArea.addEventListener('focusout', focusout);
    };

    const focusout: VoidConsumer = ( ) => {
        const textArea = document.getElementById('input-search') as HTMLInputElement;
        textArea.disabled = true;
    };

    const textChange: OnChangeListener = ( event ) => {
        console.log(event.target.value);
    };

    return (
        <div id='container-search' onClick={click}>
            <FiSearch id='icon-search'/>
            <input 
                type='text' 
                id='input-search' 
                name='input-search' 
                placeholder='Search'
                onChange={textChange}
                disabled />
        </div>
    );
};

export default SearchBar;
