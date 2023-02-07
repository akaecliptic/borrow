import { FC, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import TextButton from "components/auxil/TextButton";

const Floating: FC<{}> = () => {
    const navigate = useNavigate();
    const [registered, setRegistered] = useState(true);
    const { pathname } = useLocation();

    return (
        <>
            <header className='header-back'>
                <TextButton text='<- HOME' click={ () => { navigate('/') }}/>
                {
                    pathname === '/login' &&
                    <TextButton text={`${registered ? 'register' : 'login'}`} click={ () => { setRegistered(!registered) }}/>
                }
            </header>
            <main>
                <Outlet context={registered}/>
            </main>
        </>
    );
};

export default Floating;
