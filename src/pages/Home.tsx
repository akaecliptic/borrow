import { FC, useEffect, useState } from "react";
import useScreenSize, { BreakPoint } from "hooks/useScreenSize";
import Card from "components/Card";
import Cart from "components/Cart";
import Side from "components/Side";
import SearchBar from "components/SearchBar";
import { MdMenu } from "react-icons/md";
import IBook from "shapes/Book";
import Accessor from "base/Accessor";
import "styles/pages/Home.scss";
import UserDropDown from "components/UserDropDown";

const Home: FC<{}> = () => {

    const [ cards, setCards ] = useState<IBook[]>([]);
    const { width: screenWidth } = useScreenSize();
    
    const loadBooks = async (): Promise<void> => {
        const books: IBook[] = await Accessor.instance.books;
        setCards(books);
    };

	useEffect(() => {
        loadBooks();
	}, []);

    return (
        <>
            <header id='header-main'>
                { 
                    screenWidth <= BreakPoint.small ? 
                    <MdMenu className='icon-header'/> : 
                    <img className='icon-header' src='images/logo.svg' alt='Site Logo' /> 
                }
                <SearchBar />
                <UserDropDown />
            </header>
            { screenWidth > BreakPoint.small && <Side /> }
            <main>
                <div id='container-main'>
                    { 
                        cards.map((val, ind) => {
                            return <Card key={ind} book={val}/>
                        })
                    }
                </div>
                <Cart />
            </main>
            <footer id='footer-main'>
                <p>
                    Powered by Open Library
                </p>
            </footer>
        </>
    );
};

export default Home;
