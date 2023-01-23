import { FC } from "react";
import useScreenSize, { BreakPoint } from "hooks/useScreenSize";
import "styles/modules/Info.scss";
import IBook from "shapes/Book";

export type PropInfo = {
    show: boolean;
    book: IBook;
};

const Info: FC<PropInfo> = ({ show, book }) => {

    const { width: screenWidth } = useScreenSize();
    const getClassName = (): string => {
        if ( screenWidth <= BreakPoint.small )
            return 'container-info-small';

        return `container-info ${ ( show ) ? 'open-info' : '' }`;
    };

    return (
        <div className={ getClassName() }>
            <h2 className='info-title'>{ book.title }</h2>
            <span className='info-author-date'> Author | Date </span>
            <p className='info-description'>This is a description</p>
        </div>
    );
};

export default Info;
