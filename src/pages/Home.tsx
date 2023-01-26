import { FC, useEffect, useState } from "react";
import useScreenSize, { BreakPoint } from "hooks/useScreenSize";
import Card from "components/Card";
import Cart from "components/Cart";
import Side from "components/Side";
import SearchBar from "components/SearchBar";
import { MdMenu } from "react-icons/md";
import IBook from "shapes/Book";
import books from "_data/books.json";
import "styles/pages/Home.scss";

const Home: FC<{}> = () => {

    const [ cards, setCards ] = useState<IBook[]>([]);
    const { width: screenWidth } = useScreenSize();
    
	useEffect(() => {
        setCards(books.data);
		return () => { };
	}, [ ]);

    return (
        <>
            <header id='header-main'>
                { 
                    screenWidth <= BreakPoint.small ? 
                    <MdMenu className='icon-header'/> : 
                    <img className='icon-header' src='images/logo.svg' alt='Site Logo' /> 
                }
                <SearchBar />
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
