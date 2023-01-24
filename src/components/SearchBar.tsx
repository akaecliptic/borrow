import { FC } from "react";
import { FiSearch } from "react-icons/fi";
import { OnChangeListener } from "types/functions";
import "styles/components/SearchBar.scss";

const SearchBar: FC<{}> = () => {

    const textChange: OnChangeListener = ( event ) => {
        console.log(event.target.value);
    };

    return (
        <div id='container-search'>
            <input 
                type='text' 
                id='input-search' 
                name='input-search' 
                placeholder='Search'
                onChange={textChange}/>
            <div id='icon-search'>
                <FiSearch/>
            </div>
        </div>
    );
};

export default SearchBar;
