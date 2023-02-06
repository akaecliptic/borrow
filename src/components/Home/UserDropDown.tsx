import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { OnClickListener, VoidConsumer } from "types/functions";
import Accessor from "base/Accessor";
import { MdAccountCircle, MdLogin, MdLogout } from "react-icons/md";
import "styles/components/UserDropDown.scss"

const UserDropDown: FC<{}> = () => {
    
    const navigate = useNavigate();
    const [login, setLogin] = useState(Accessor.instance.isValid)

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
                alt={`User ===`}
            />
            <div id='user-dropdown-content' className='hide-dropdown'>
                {
                    !login ? 
                    <span onClick={ () => navigate('/login') }><MdLogin /> Login</span> : 
                    <>
                        <span onClick={ () => console.log('click') }><MdAccountCircle /> Profile</span>
                        <span onClick={ event => logout(event) }><MdLogout /> Logout</span>
                    </>
                }
            </div>
        </div>
    );
};

export default UserDropDown;
