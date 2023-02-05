import { FC, useMemo, useState } from "react";
import Accessor from "base/Accessor";
import { VoidConsumer } from "types/functions";
import TextButton from "components/auxil/TextButton";
import Toasty from "components/auxil/Toasty";
import useToasty from "hooks/useToasty";
import { ClientResponseError } from "pocketbase";
import { useNavigate } from "react-router-dom";
import "styles/components/RegisterForm.scss";

const RegisterForm: FC<{}> = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [toasty, actions] = useToasty();

    const submit: VoidConsumer = async () => {
        try {
            await Accessor.instance.register(email, password, passwordConfirm);
            actions.update('Registration successful. Redirecting...', 'info', 'temp', () => navigate('/') );
        } catch ( error ) {
            actions.update(`Registration error: '${(error as ClientResponseError).data.message}'`, 'error', 'temp');
        }
        actions.syn();
    };

    const valid = useMemo<boolean>( () => {
        return (email.match(/\w+@\w+\.com/i) !== null) && password.length >= 8 && password === passwordConfirm;
    }, [ email, password, passwordConfirm ]);

    return (
        <div id='container-register-form'>
            <Toasty state={toasty} actions={actions} />
            <label htmlFor='email'>Email</label>
            <input title='email' type='email' onChange={ e => setEmail(e.currentTarget.value) }/>
            <label htmlFor='password'>Password</label>
            <input title='password' type='password' onChange={ e => setPassword(e.currentTarget.value) }/>
            <label htmlFor='password-confirm'>Confirm Password</label>
            <input title='password-confirm' type='password' onChange={ e => setPasswordConfirm(e.currentTarget.value) }/>
            <TextButton text='Register' click={() => submit() } disable={!valid}/>
        </div>
    );
};

export default RegisterForm;
