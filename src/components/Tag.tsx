import { FC } from "react";
import { MdBookmark } from "react-icons/md";
import "styles/modules/Tag.scss";

const Tag: FC<{}> = () => {

    return (
        <div className='container-tag'>
            <MdBookmark />
        </div>
    );
};

export default Tag;
