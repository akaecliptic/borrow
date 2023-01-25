import { FC, useCallback, useEffect, useState } from "react";
import useScreenSize, { BreakPoint } from "hooks/useScreenSize";
import Card from "components/Card";
import Cart from "components/Cart";
import Side from "components/Side";
import SearchBar from "components/SearchBar";
import { MdMenu } from "react-icons/md";
import IBook from "shapes/Book";
import { _data } from "_data/books";
import openlib, { Books, StableBook } from "openlib";
import "styles/pages/Home.scss";

const Home: FC<{}> = () => {

    const [ cards, setCards ] = useState<IBook[]>([]);
    const { width: screenWidth } = useScreenSize();

    const makeBook = ( data: StableBook, id: string ): IBook => {
        const authors: string[] = data.authors.map( author => author.name );
        const book: IBook = {
            id: id,
            olid: id,
            year: data.publish_date,
            title: data.title,
            authors: authors,
            description: '',
            tags: []
        };

        return book;
    };

    const query = useCallback( async () => {
        const books: IBook[] = [];
        for (let i = 0; i < _data.editions.length; i++) {
            const id: string = _data.editions[i];
            const collection: Books = await openlib.library({ endpoint: 'books', bibkeys: [[ 'olid', id ]] }) as Books;
            const data: StableBook = collection[`olid:${id}`] as StableBook;
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
