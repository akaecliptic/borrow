import { FC } from "react";
import dayjs from "dayjs";
import IBook from "shapes/Book";
import "styles/components/BorrowedBook.scss";

export type PropBorrowedBook = {
    book: IBook;
};

// Users can not directly mark a book as returned. A return request must be sent and confirmed
const BorrowedBook: FC<PropBorrowedBook> = ({ book }) => {
    return (
        <div className='container-borrowed-book'>
            <div className='content'> 
                <h4>{ book.title }</h4>
                <span className='info-author-date'>{ book.authors.join(', ') } | { book.year }</span>
            </div>
            <div className='status'>
                <h3>OVERDUE</h3>
                <span>Return: { dayjs().format('YYYY-MM-DD').toString() }</span>
            </div>
        </div>
    );
};

export default BorrowedBook;
