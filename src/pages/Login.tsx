import { FC } from "react";
import { useOutletContext } from "react-router-dom";
import LoginForm from "components/Login/LoginForm";
import RegisterForm from "components/Login/RegisterForm";

const Login: FC<{}> = () => {
    const registered: boolean = useOutletContext();
    return registered ? <LoginForm /> : <RegisterForm /> 
};

export default Login;
