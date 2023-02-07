import { FC, useMemo, useState } from "react";
import dayjs from "dayjs";
import TextButton from "components/auxil/TextButton";
import CheckoutBook from "components/Checkout/CheckoutBook";
import useCartStore from "hooks/useCartStore";
import { VoidConsumer } from "types/functions";
import { useNavigate } from "react-router-dom";
import Accessor from "base/Accessor";
import Toasty from "components/auxil/Toasty";
import useToasty from "hooks/useToasty";
import { ClientResponseError } from "pocketbase";
import "styles/pages/Checkout.scss";

const Checkout: FC<{}> = () => {

    const navigate = useNavigate();
    const [ books, clearCart ] = useCartStore( state => [ state.books, state.clearCart ] );
    const [ returnDate, setReturnDate ] = useState<string>('');
    const date: string = dayjs().add(7, 'day').format('YYYY-MM-DD');
    const [toasty, actions] = useToasty();

    const submit: VoidConsumer = async () => {
        try {
            for( let i = 0; i < books.length; i++ )
                await Accessor.instance.borrow(books[i].id, date, returnDate);
            
            actions.update(`Borrow request successful. Redirecting...`, 'info', 'temp', () => { navigate('/'); clearCart(); } );
        } catch ( error ) {
            const message: string = ( (error as Error).message ) ? (error as Error).message : (error as ClientResponseError).data.message;
            actions.update(`Borrowing error: '${message}'`, 'error', 'perm');
        }
        actions.syn();
    };

    const valid = useMemo<boolean>( () => books.length > 0 && returnDate !== '' && !toasty.show, [ books, returnDate, toasty.show ]);

    return (
        <div className='form' id='container-checkout-form'>
            <Toasty state={toasty} actions={actions} />
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
            <input  id='return-date' title='returnDate' type='date' 
                    min={date} placeholder={date} disabled={books.length === 0} 
                    onChange={ e => setReturnDate(e.currentTarget.value)}/>
            <TextButton text='CONFIRM' click={ () => submit() } disable={!valid}/>
        </div>
    );
};

export default Checkout;
