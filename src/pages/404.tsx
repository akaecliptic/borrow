import { FC } from "react";

const Error404: FC<{}> = () => {
    return (
        <div style={{ margin: 'auto' }}>
            <h1 style={{ textAlign: 'center' }}>404 ERROR</h1>
            <h3>Hmm... The page you are looking for does not exist</h3>
        </div>
    );
};

export default Error404;
