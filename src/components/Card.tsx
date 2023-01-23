import { FC, useState } from "react";
import { VoidConsumer } from "types/functions";
import useCartStore from "hooks/useCartStore";
import Tag from "components/Tag";
import Info from "components/Info";
import "styles/modules/Card.scss";
import IBook from "shapes/Book";
import { coverURL } from "openlib";

export type PropCard = {
    book: IBook;
};

const Card: FC<PropCard> = ({ book }) => {

    const [ selected, setSelected ] = useState<boolean>(false);
    const [ showInfo, setShowInfo ] = useState<boolean>(false);
    const [ addBook, removeBook ] = useCartStore( state => [ state.addBook, state.removeBook ] );

    const click: VoidConsumer = ( ) => {
        if ( selected ) { 
            removeBook(book.id);
            setSelected(false);
            return;
        }

        setSelected(addBook(book.id));
    };

    return (
        <div   
            className='container-card' 
            onClick={click}
            onMouseOver={ () => setShowInfo(true) }
            onMouseOut={ () => setShowInfo(false) }
        >
            { selected && <Tag />}
            <img 
                className='cover'
                src={`${coverURL({ value: book.id, key: 'olid', size: 'L', info: false})}`}
                alt={`Cover of book ${book.title}`}
            />
            <Info show={showInfo} book={book}/>
        </div>
    );
};

export default Card;
