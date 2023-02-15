import { FC } from "react";
import Accessor from "base/Accessor";
import InputChange from "components/Profile/Account/InputChange";
import PasswordChange from "components/Profile/Account/PasswordChange";
import TextButton from "components/auxil/TextButton";

const Account: FC<{}> = () => {
    return (
        <>
            <h3>Update account</h3>
            <div className='container-changes'>
                <InputChange value={Accessor.instance.user.username!} field='username' onChange={ e => console.log(e.currentTarget.value) }/>
                <PasswordChange onValidate={ password => console.log(password) }/>
            </div>
            <div className='container-account-buttons'>
                <TextButton text='Delete Account' click={ () => console.log('save') }/>
                <TextButton text='Save Changes' click={ () => console.log('save') }/>
            </div>
        </>
    );
};

export default Account;
