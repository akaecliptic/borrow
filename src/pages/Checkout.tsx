import { FC } from "react";
import dayjs from "dayjs";
import TextButton from "components/auxil/TextButton";
import CheckoutBook from "components/Checkout/CheckoutBook";
import useCartStore from "hooks/useCartStore";
import { VoidConsumer } from "types/functions";
import "styles/pages/Checkout.scss";

const Checkout: FC<{}> = () => {

    const [ books ] = useCartStore( state => [ state.books ] );
    const date: string = dayjs().format('YYYY-MM-DD');

    const submit: VoidConsumer = () => {
        const returnDate: HTMLInputElement = document.getElementById('return-date') as HTMLInputElement;
        console.log(`${books[0].title}, ${books[1].title} return by: ${returnDate.value}`);
    };

    return (
        <div className='form' id='container-checkout-form'>
            <div id='form-user'>
                <h3>Username</h3>
            </div>
            <div id='container-checkout-books'>
                {   
                    books.length === 0 ? 
                    <div id='checkout-no-books'><span>No books in cart</span><span>Select books from home page to continue</span></div>    :
                    books.map( book => (<CheckoutBook key={book.id} book={book}/>))
                }
            </div>
            <label htmlFor='returnDate'>Return By:</label>
            <input id='return-date' title='returnDate' type='date' min={date} placeholder={date} disabled={books.length === 0}/>
            <TextButton text='CONFIRM' click={ () => submit() } disable={books.length === 0}/>
        </div>
    );
};

export default Checkout;
