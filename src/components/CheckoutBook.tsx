import { FC } from "react";
import { MdCancel } from "react-icons/md";
import "styles/components/CheckoutBook.scss";

const CheckoutBook: FC<{}> = () => {
    return (
        <div className='container-checkout-book'>
            <MdCancel className='cancel'/>
            <div className='content'> 
                <h3>Dune</h3>
                <span className='info-author-date'> Author | Date </span>
            </div>
            <img className='mark' src='images/mark.svg' alt='Book mark'/>
        </div>
    );
};

export default CheckoutBook;
