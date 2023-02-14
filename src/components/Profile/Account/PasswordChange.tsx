import { FC, useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import "styles/components/PasswordChange.scss";

export type PropPasswordChange = {
    onValid: ( pass: string ) => void;
};

const PasswordChange: FC<PropPasswordChange> = ({ onValid }) => {
    
    const [editMode, setEditMode] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirm, setConfirm] = useState<string>('');

    useEffect(() => {
        if ( password.length < 8 || password !== confirm ) return;

        onValid(password);
    
    }, [password, confirm, onValid]);

    return (
        <div className='password-change'>
            <label htmlFor='text'>Change password</label>
            <input type='password' name='text' disabled={!editMode} onChange={ e => setPassword(e.currentTarget.value) }/>
            <MdEdit onClick={ () => setEditMode(!editMode) } className={ (editMode) ? 'active' : '' }/>
            <label htmlFor='text' className='password-change-confirm'>Confirm password</label>
            <input type='password' name='text' className='password-change-confirm' disabled={!editMode} onChange={ e => setConfirm(e.currentTarget.value) }/>
        </div>
    );
};

export default PasswordChange;
