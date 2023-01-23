import { FC } from "react";
import dayjs from "dayjs";
import TextButton from "components/TextButton";
import CheckoutBook from "components/CheckoutBook";
import "styles/modules/CheckoutForm.scss";

const CheckoutForm: FC<{}> = () => {

    const date: string = dayjs().format('YYYY-MM-DD');

    return (
        <div className='container-checkout-form'>
            <div className='form-user'>
                <h3>Username</h3>
            </div>
            <CheckoutBook />
            <CheckoutBook />
            <label htmlFor='returnDate'>Return By:</label>
            <input title='returnDate' type='date' min={date} placeholder={date}/>
            <TextButton text='CONFIRM' click={ () => { console.log(' Hello World ')}}/>
        </div>
    );
};

export default CheckoutForm;
