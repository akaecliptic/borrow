import { FC, useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { shallow } from "zustand/shallow";
import useCartStore from "hooks/useCartStore";
import ConditionalLink from "components/util/ConditionalLink";
import { VoidConsumer } from "types/functions";
import useToasty from "hooks/useToasty";
import Toasty from "components/Toasty";
import "styles/components/Cart.scss";

const Cart: FC<{}> = () => {

    const [ amount, setAmount ] = useState<number>(0);
    const [ books ] = useCartStore( state => [ state.books ], shallow );
    const [toasty, actions] = useToasty();

    const click: VoidConsumer = () => {
        if ( amount > 0 || toasty.show ) return;
        actions.update('Cart is empty. Please select a book to checkout.', 'warn', 'temp');
        actions.syn();
    };

    useEffect( () => {
        setAmount(books.length);
    }, [ books ]);

    return (
        <>
            <Toasty state={toasty} actions={actions} />
            <div id='container-cart' onClick={click}>
                { (amount !== 0) && <span id='counter-cart'>{amount}</span> }
                <ConditionalLink destination='/checkout' condition={amount > 0}>
                    <MdShoppingCart /> 
                </ConditionalLink>
            </div>
        </>
    );
};

export default Cart;
