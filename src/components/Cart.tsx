import { FC, useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { shallow } from "zustand/shallow";
import { Link } from "react-router-dom";
import useCartStore from "hooks/useCartStore";
import "styles/modules/Cart.scss";

const Cart: FC<{}> = () => {

    const [ amount, setAmount ] = useState<number>(0);
    const [ books ] = useCartStore( state => [ state.books ], shallow );

    useEffect( () => {
        setAmount(books.length);
        
        return () => { };
    }, [ books ]);

    return (
        <div id='container-cart'>
            { (amount !== 0) && <span id='counter-cart'>{amount}</span> }
            <Link to='/checkout'> 
                <MdShoppingCart /> 
            </Link>
        </div>
    );
};

export default Cart;
