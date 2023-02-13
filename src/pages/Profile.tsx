import { FC } from "react";
import { OnClickListener } from "types/functions";
import "styles/pages/Profile.scss";

const Profile: FC<{}> = () => {

    const click: OnClickListener = ( event ) => {
        if ( event.target instanceof HTMLDivElement ) return;

        //! WATCH: Can't place it, but this looks odd. Migtht come back
        const children: HTMLElement[] = Array.from(event.currentTarget.children) as HTMLElement[];

        children.forEach( child => {
            if ( child === event.target ) {
                if ( !child.classList.contains('active') ) child.classList.add('active');
            } else {
                child.classList.remove('active');
            }
        });
    };

    return (
        <>
            <div className='form-container'>
                <div className='form-tabs' onClick={click}>
                    <span className='active'>Account</span>
                    <span>User</span>
                    <span>Borrowed</span>
                </div>
                <div className='form'>
                
                </div>
            </div>
        </>
    );
};

export default Profile;
