import { FC } from "react";
import Accessor from "base/Accessor";
import InputChange from "components/Profile/Account/InputChange";
import PasswordChange from "components/Profile/Account/PasswordChange";

const Account: FC<{}> = () => {
    return (
        <>
            <div>
                <InputChange value={Accessor.instance.user.username!} field='username' onChange={ e => console.log(e.currentTarget.value) }/>
            </div>
            <div>
                <PasswordChange onValid={ password => console.log(password) }/>
            </div>
        </>
    );
};

export default Account;
