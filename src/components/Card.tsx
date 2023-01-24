import { FC, useState } from "react";
import { VoidConsumer } from "types/functions";
import useCartStore from "hooks/useCartStore";
import "styles/components/Card.scss";
import IBook from "shapes/Book";
import { coverURL } from "openlib";
import { MdBookmark } from "react-icons/md";
import useScreenSize, { BreakPoint } from "hooks/useScreenSize";

export type PropCard = {
    book: IBook;
};

const Card: FC<PropCard> = ({ book }) => {

    const [ selected, setSelected ] = useState<boolean>(false);
    const [ showInfo, setShowInfo ] = useState<boolean>(false);
    const { width: screenWidth } = useScreenSize();
    const [ addBook, removeBook ] = useCartStore( state => [ state.addBook, state.removeBook ] );

    const renderTag = (): JSX.Element => {
        return (
            <div className='container-tag'>
                <MdBookmark />
            </div>
        );
    }

    const getClassName = (): string => {
        if ( screenWidth <= BreakPoint.small )
            return 'container-info-small';

        return `container-info ${ ( showInfo ) ? 'open-info' : '' }`;
    };

    const click: VoidConsumer = ( ) => {
        if ( selected ) { 
            removeBook(book.id);
            setSelected(false);
            return;
        }

        setSelected(addBook(book.id));
    };

    return (
        <div className='container-card' onClick={click}
            onMouseOver={ () => setShowInfo(true) } onMouseOut={ () => setShowInfo(false) }
        >
            { selected && renderTag() }
            <img 
                className='cover'
                src={`${coverURL({ value: book.id, key: 'olid', size: 'L', info: false})}`}
                alt={`Cover of book ${book.title}`}
            />
            <div className={ getClassName() }>
                <h2 className='info-title'>{ book.title }</h2>
                <span className='info-author-date'> Author | Date </span>
                <p className='info-description'>This is a description</p>
            </div>
        </div>
    );
};

export default Card;
