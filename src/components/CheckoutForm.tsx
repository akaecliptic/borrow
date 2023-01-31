import { FC } from "react";
import dayjs from "dayjs";
import TextButton from "components/TextButton";
import CheckoutBook from "components/CheckoutBook";
import "styles/components/CheckoutForm.scss";
import useCartStore from "hooks/useCartStore";

const CheckoutForm: FC<{}> = () => {

    const [ books ] = useCartStore( state => [ state.books ] );
    const date: string = dayjs().format('YYYY-MM-DD');

    return (
        <div className='container-checkout-form'>
            <div className='form-user'>
                <h3>Username</h3>
            </div>
            <div className='container-checkout-books'>
                {   
                    books.length === 0 ? 
                    <div className='checkout-no-books'><span>No books in cart</span></div>    :
                    books.map( book => (<CheckoutBook key={book.id} book={book}/>))
                }
            </div>
            <label htmlFor='returnDate'>Return By:</label>
            <input title='returnDate' type='date' min={date} placeholder={date}/>
            <TextButton text='CONFIRM' click={ () => { console.log(' Hello World ')} } disable={books.length === 0}/>
        </div>
    );
};

export default CheckoutForm;
