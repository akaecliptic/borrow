import { FC } from "react";
import "styles/components/LoginForm.scss";
import TextButton from "components/TextButton";

const LoginForm: FC<{}> = () => {

    return (
        <div id='container-login-form'>
            <label htmlFor='email'>Email</label>
            <input id='email' title='email' type='email'/>
            <label htmlFor='password'>Password</label>
            <input id='password' title='password' type='password'/>
            <TextButton text='Login' click={() => {}} disable/>
        </div>
    );
};

export default LoginForm;
