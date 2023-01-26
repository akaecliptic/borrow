import { FC } from "react";
import { MdCancel } from "react-icons/md";
import IBook from "shapes/Book";
import "styles/components/CheckoutBook.scss";

export type PropCheckoutBook = {
    book: IBook
};

const CheckoutBook: FC<PropCheckoutBook> = ({ book }) => {
    return (
        <div className='container-checkout-book'>
            <MdCancel className='cancel'/>
            <div className='content'> 
                <h4>{ book.title }</h4>
                <span className='info-author-date'>{ book.authors.join(', ') } | { book.year }</span>
            </div>
            <img className='mark' src='images/mark.svg' alt='Book mark'/>
        </div>
    );
};

export default CheckoutBook;
