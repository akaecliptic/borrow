import { FC, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { OnClickListener, VoidConsumer } from "types/functions";
import Accessor from "base/Accessor";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/md";
import IUser from "shapes/User";
import "styles/components/UserDropDown.scss"

const UserDropDown: FC<{}> = () => {
    
    const [login, setLogin] = useState(Accessor.instance.isValid);
    const user: IUser | null = useMemo(() => ( login ) ? Accessor.instance.user : null, [login]);

    const logout: OnClickListener = ( event: React.MouseEvent ) => {
        toggle();
        setLogin(false);
        event.stopPropagation();
        Accessor.instance.logout();
    };

    const toggle: VoidConsumer = ( ) => {
        const dropdown: HTMLDivElement = document.getElementById('user-dropdown-content') as HTMLDivElement;
        dropdown.classList.toggle('hide-dropdown');
    };

    return (
        <div id='container-user-dropdown' onClick={ () => toggle() }>
            <img
                src={'images/user_default.jpg'}
                alt={user ? user.username : 'no user'}
            />
            <div id='user-dropdown-content' className='hide-dropdown'>
                {
                    !login ? 
                    <Link to='/login'><MdLogin /> Login</Link> : 
                    <>
                        <Link to={`/user/${user?.id}`}><MdAccountCircle /> Profile</Link>
                        <span onClick={ event => logout(event) }><MdLogout /> Logout</span>
                    </>
                }
            </div>
        </div>
    );
};

export default UserDropDown;
