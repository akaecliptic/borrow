import { FC, useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { shallow } from "zustand/shallow";
import useCartStore from "hooks/useCartStore";
import "styles/components/Cart.scss";
import ConditionalLink from "components/util/ConditionalLink";
import { VoidConsumer } from "types/functions";

const Cart: FC<{}> = () => {

    const [ amount, setAmount ] = useState<number>(0);
    const [ books ] = useCartStore( state => [ state.books ], shallow );

    const click: VoidConsumer = () => {
        if ( amount > 0 ) return;
        alert('Cart is empty. Please select a book to checkout.')
    };

    useEffect( () => {
        setAmount(books.length);
    }, [ books ]);

    return (
        <div id='container-cart' onClick={click}>
            { (amount !== 0) && <span id='counter-cart'>{amount}</span> }
            <ConditionalLink destination='/checkout' condition={amount > 0}>
                <MdShoppingCart /> 
            </ConditionalLink>
        </div>
    );
};

export default Cart;
