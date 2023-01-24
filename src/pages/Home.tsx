import { FC, useCallback, useEffect, useState } from "react";
import useScreenSize, { BreakPoint } from "hooks/useScreenSize";
import Card from "components/Card";
import Cart from "components/Cart";
import Side from "components/Side";
import SearchBar from "components/SearchBar";
import { MdMenu } from "react-icons/md";
import IBook from "shapes/Book";
import { _data } from "_data/books";
import openlib, { Edition } from "openlib";
import "styles/pages/Home.scss";

const Home: FC<{}> = () => {

    const [ cards, setCards ] = useState<IBook[]>([]);
    const { width: screenWidth } = useScreenSize();

    const makeBook = ( edition: Edition, id: string ): IBook => {
        const book: IBook = {
            id: id,
            year: 2000,
            title: edition.title!,
            author: '',
            description: '',
            tags: []
        };

        return book;
    };

    const query = useCallback( async () => {
        const books: IBook[] = [];
        for (let i = 0; i < _data.editions.length; i++) {
            const id: string = _data.editions[i];
            const data: Edition = await openlib.library({ endpoint: 'editions', parameter: id }) as Edition;
            books.push(makeBook(data, id));
        }
        
        setCards(books);
    }, []);
    
	useEffect(() => {
        query();
		return () => { };
	}, [ query ]);

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
