import { FC } from "react";
import books from "_data/books.json";
import BorrowedBook from "components/Profile/Borrowed/BorrowedBook";
import TextButton from "components/auxil/TextButton";

//Don't think a user should be able to borrow more than 4? books. This will need to be discussed.
const Borrowed: FC<{}> = () => {

    return (
        <>
            <h3>4 books overdue</h3>
            <div>
                { 
                    books.data.map( (book, index ) => {
                        if ( index !== 9 && index !== 1 && index !== 4 && index !== 8 ) return <></>;
                        
                        const b = { ...book, borrowed: '' };
                        return <BorrowedBook key={b.olid} book={b} />;
                    }) 
                }
            </div>
            <TextButton text='send request' click={ () => console.log('request') }/>
        </>
    );
};

export default Borrowed;
