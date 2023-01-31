import { FC } from "react";
import { FiSearch } from "react-icons/fi";
import { OnChangeListener, VoidConsumer } from "types/functions";
import useFilterStore from "hooks/useFilterStore";
import "styles/components/SearchBar.scss";

const SearchBar: FC<{}> = () => {

    const [ setSearch ] = useFilterStore( state => [state.setSearch] );

    const textChange: OnChangeListener = ( event ) => {
        setSearch(event.target.value);
    };

    const click: VoidConsumer = () => {
        const input: HTMLInputElement = document.getElementById('input-search') as HTMLInputElement;
        input.focus();
    };

    return (
        <div id='container-search' onClick={click}>
            <FiSearch id='icon-search'/>
            <input 
                type='text' 
                id='input-search' 
                name='input-search' 
                placeholder='Search'
                onChange={textChange}/>
        </div>
    );
};

export default SearchBar;
