import { FC } from "react";
import TextButton from "components/TextButton";
import CheckoutForm from "components/CheckoutForm";

const Checkout: FC<{}> = () => {
    return (
        <main>
            <TextButton text='<- BACK' click={ () => { console.log(' Hello World ')}}/>
            <CheckoutForm />
        </main>
    );
};

export default Checkout;
