import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { VoidConsumer } from "types/functions";
import "styles/components/UserDropDown.scss"

const UserDropDown: FC<{}> = () => {
    const navigate = useNavigate();

    const refDropdown = useRef<HTMLDivElement>(null);

    const click: VoidConsumer = ( ) => {
        if ( !refDropdown.current ) return;
        toggle();
    };

    const toggle: VoidConsumer = ( ) => {
        refDropdown.current!.classList.toggle('hide-dropdown');
    };

    useEffect(() => {
        if ( !refDropdown.current ) return;

        const dropdown: HTMLDivElement = refDropdown.current;
        dropdown.addEventListener('mouseleave', toggle);

        return () => dropdown.removeEventListener('mouseleave', toggle);
    }, [ refDropdown ]);

    return (
        <div id='container-user-dropdown' onClick={click}>
            <img
                src={'images/user_default.jpg'}
                alt={`User ===`}
            />
            <div ref={refDropdown} id='user-dropdown-content' className='hide-dropdown'>
                <span onClick={ () => navigate('/login') }>LOGIN</span>
            </div>
        </div>
    );
};

export default UserDropDown;
