import { FC, useCallback, useEffect, useState } from "react";
import Card from "components/Card";
import Cart from "components/Cart";
import "styles/modules/Main.scss";
import { _data } from "_data/books";
import openlib, { Edition } from "openlib";
import IBook from "shapes/Book";

const Main: FC<{}> = () => {

    const [ cards, setCards ] = useState<IBook[]>([]);

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
    } ,[]);
    
    
	useEffect(() => {
        query();
		return () => { };
	}, [ query ]);

    return (
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
    );
};

export default Main;
