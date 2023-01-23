import { FC } from "react";
import "styles/modules/Header.scss";
import SearchBar from "components/SearchBar";
import { MdMenu } from "react-icons/md";
import useScreenSize, { BreakPoint } from "hooks/useScreenSize";

const Header: FC<{}> = () => {

    const { width: screenWidth } = useScreenSize();

    return (
        <header>
            { 
                screenWidth <= BreakPoint.small ? 
                <MdMenu className='icon-header'/> : 
                <img className='icon-header' src='images/logo.svg' alt='Site Logo' /> 
            }
            <SearchBar />
        </header>
    );
};

export default Header;
