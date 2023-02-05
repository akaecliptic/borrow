import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextButton from "components/auxil/TextButton";
import LoginForm from "components/Login/LoginForm";
import RegisterForm from "components/Login/RegisterForm";

const Login: FC<{}> = () => {
    const navigate = useNavigate();
    const [registered, setRegistered] = useState(true);

    return (
        <>
            <header className='header-back'>
                <TextButton text='<- BACK' click={ () => { navigate('/') }}/>
                <TextButton text={`${registered ? 'register' : 'login'}`} click={ () => { setRegistered(!registered) }}/>
            </header>
            <main>
                { registered ? <LoginForm /> : <RegisterForm /> }
            </main>
        </>
    );
};

export default Login;
