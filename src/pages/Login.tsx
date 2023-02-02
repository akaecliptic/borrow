import { FC } from "react";
import { useNavigate } from "react-router-dom";
import TextButton from "components/TextButton";
import LoginForm from "components/LoginForm";

const Login: FC<{}> = () => {
    const navigate = useNavigate();

    return (
        <>
            <header className='header-back'>
                <TextButton text='<- BACK' click={ () => { navigate('/') }}/>
            </header>
            <main>
                <LoginForm />
            </main>
        </>
    );
};

export default Login;
