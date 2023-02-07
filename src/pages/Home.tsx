import { FC, useEffect, useMemo, useState } from "react";
import useScreenSize, { BreakPoint } from "hooks/useScreenSize";
import { MdMenu } from "react-icons/md";
import Card from "components/Home/Card";
import Cart from "components/Home/Cart";
import SearchBar from "components/Home/SearchBar";
import UserDropDown from "components/Home/UserDropDown";
import useFilterStore from "hooks/useFilterStore";
import IBook from "shapes/Book";
import Accessor from "base/Accessor";
import "styles/pages/Home.scss";

const Home: FC<{}> = () => {

    const [ cards, setCards ] = useState<IBook[]>([]);
    const [ search ] = useFilterStore( state => [state.search] );
    const { width: screenWidth } = useScreenSize();
    
    const loadBooks = async (): Promise<void> => {
        const books: IBook[] = await Accessor.instance.books;
        setCards(books);
    };

    const filteredCards = useMemo<IBook[]>( () => {
        //* Need to update search functionality. This is fine for now.
        return search.length === 0 ? 
        cards.filter( book => book.borrowed === '' ) : 
        cards.filter( book => book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && book.borrowed === '' );
    }, [cards, search]);

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
            <main>
                <div id='container-main'>
                    { 
                        filteredCards.map((val, ind) => {
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
