import { FC } from "react";
import { useNavigate } from "react-router-dom";
import TextButton from "components/TextButton";
import CheckoutForm from "components/CheckoutForm";

const Checkout: FC<{}> = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className='header-back'>
                <TextButton text='<- BACK' click={ () => { navigate('/') }}/>
            </header>
            <main>
                <CheckoutForm />
            </main>
        </>
    );
};

export default Checkout;
