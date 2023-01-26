import { FC, useEffect, useState } from "react";
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
    const [ coverImage, setCoverImage ] = useState<string>('images/cover_default.jpg');
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

    useEffect(() => {
        const url: string = coverURL({ value: book.olid, key: 'olid', size: 'L', info: false});
        setCoverImage(url);
    }, [ book.olid ]);

    return (
        <div className='container-card' onClick={click}
            onMouseOver={ () => setShowInfo(true) } onMouseOut={ () => setShowInfo(false) }
        >
            { selected && renderTag() }
            <img 
                className='cover'
                src={coverImage}
                alt={`Cover of book ${book.title}`}
            />
            <div className={ getClassName() }>
                <h3 className='info-title'>{ book.title }</h3>
                <span className='info-author-date'>{ book.authors.join(', ') } | { book.year }</span>
                <p className='info-description'>{ book.description }</p>
            </div>
        </div>
    );
};

export default Card;
