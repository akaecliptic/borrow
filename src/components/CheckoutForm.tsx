import { FC } from "react";
import dayjs from "dayjs";
import TextButton from "components/TextButton";
import CheckoutBook from "components/CheckoutBook";
import "styles/components/CheckoutForm.scss";
import useCartStore from "hooks/useCartStore";
import { VoidConsumer } from "types/functions";

const CheckoutForm: FC<{}> = () => {

    const [ books ] = useCartStore( state => [ state.books ] );
    const date: string = dayjs().format('YYYY-MM-DD');

    const submit: VoidConsumer = () => {
        const returnDate: HTMLInputElement = document.getElementById('return-date') as HTMLInputElement;
        console.log(`${books[0].title}, ${books[1].title} return by: ${returnDate.value}`);
    };

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
            <input id='return-date' title='returnDate' type='date' min={date} placeholder={date} disabled={books.length === 0}/>
            <TextButton text='CONFIRM' click={ () => submit() } disable={books.length === 0}/>
        </div>
    );
};

export default CheckoutForm;
