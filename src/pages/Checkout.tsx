import { FC } from "react";
import TextButton from "components/TextButton";
import CheckoutForm from "components/CheckoutForm";
import "styles/pages/Checkout.scss";

const Checkout: FC<{}> = () => {
    return (
        <>
            <header id='header-checkout'>
                <TextButton text='<- BACK' click={ () => { console.log(' Hello World ')}}/>
            </header>
            <main>
                <CheckoutForm />
            </main>
        </>
    );
};

export default Checkout;
