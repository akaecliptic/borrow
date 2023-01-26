import { FC } from "react";
import { Link } from "react-router-dom";

export type PropConditionalLink = {
    condition: boolean;
    destination: string;
    children: React.ReactNode;
};

const ConditionalLink: FC<PropConditionalLink> = ({ condition, destination, children }) => {
    if ( condition ) {
        return <Link to={destination}>{ children }</Link>;
    } else {
        return <>{ children }</>;
    }  
};

export default ConditionalLink;
