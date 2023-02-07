import { FC, useMemo, useState } from "react";
import Accessor from "base/Accessor";
import { VoidConsumer } from "types/functions";
import TextButton from "components/auxil/TextButton";
import Toasty from "components/auxil/Toasty";
import useToasty from "hooks/useToasty";
import { ClientResponseError } from "pocketbase";
import { useNavigate } from "react-router-dom";

const LoginForm: FC<{}> = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [toasty, actions] = useToasty();

    const submit: VoidConsumer = async () => {
        try {
            await Accessor.instance.login(email, password);
            actions.update('Login successful. Redirecting...', 'info', 'temp', () => navigate('/') );
        } catch ( error ) {
            // TODO: Check User exists
            actions.update(`Login error: '${(error as ClientResponseError).data.message}'`, 'error', 'temp');
        }
        actions.syn();
    };

    const valid = useMemo<boolean>( () => {
        return (email.match(/\w+@\w+\.com/i) !== null) && password.length >= 8;
    }, [ email, password ]);

    return (
        <div className='auth-form'>
            <Toasty state={toasty} actions={actions} />
            <label htmlFor='email'>Email</label>
            <input title='email' type='email' onChange={ e => setEmail(e.currentTarget.value) }/>
            <label htmlFor='password'>Password</label>
            <input title='password' type='password' onChange={ e => setPassword(e.currentTarget.value) }/>
            <TextButton text='Login' click={() => submit() } disable={!valid}/>
        </div>
    );
};

export default LoginForm;
