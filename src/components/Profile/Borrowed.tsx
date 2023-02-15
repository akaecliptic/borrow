import { FC, useEffect, useState } from "react";
import BorrowedBook from "components/Profile/Borrowed/BorrowedBook";
import TextButton from "components/auxil/TextButton";
import Accessor from "base/Accessor";
import IBook from "shapes/Book";

//Don't think a user should be able to borrow more than 4? books. This will need to be discussed.
const Borrowed: FC<{}> = () => {

    const [books, setBooks] = useState<IBook[]>([]);

    useEffect( () => {
        (async (): Promise<void> => {
            await Accessor.instance.borrowed.then( response => {
                const temp: IBook[] = [];
                response.forEach( recordBook => temp.push(recordBook[1]) );
                setBooks(temp);
            });
        })();
    }, []);

    return (
        <>
            <h3>4 books overdue</h3>
            <div>
                { books.map( book => <BorrowedBook key={book.olid} book={book} /> ) }
            </div>
            <TextButton text='send request' click={ () => console.log('request') }/>
        </>
    );
};

export default Borrowed;
