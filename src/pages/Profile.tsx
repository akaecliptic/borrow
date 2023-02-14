import { FC, useState } from "react";
import { OnClickListener } from "types/functions";
import Account from "components/Profile/Account";
import Borrowed from "components/Profile/Borrowed";
import "styles/pages/Profile.scss";

type Tabs = 'account' | 'borrowed';

const Profile: FC<{}> = () => {

    const [tab, setTab] = useState<Tabs>('account');

    const click: OnClickListener = ( event ) => {
        if ( event.target instanceof HTMLDivElement ) return;

        //! WATCH: Can't place it, but this looks odd. Migtht come back
        const children: HTMLElement[] = Array.from(event.currentTarget.children) as HTMLElement[];

        children.forEach( child => {
            if ( child === event.target ) {
                if ( child.classList.contains('active') ) return; 
                
                child.classList.add('active');
                setTab( child.innerText.toLowerCase() as Tabs );
            } else {
                child.classList.remove('active');
            }
        });
    };

    const select = (): JSX.Element => {
        switch (tab) {
            case 'account':
                return <Account />
            case 'borrowed':
                return <Borrowed />
            default: 
                return <></>
        }
    };

    return (
        <>
            <div className='form-container'>
                <div className='form-tabs' onClick={click}>
                    <span className='active'>Account</span>
                    <span>Borrowed</span>
                </div>
                <div className={`form profile-form-${tab}`}>
                    { select() }
                </div>
            </div>
        </>
    );
};

export default Profile;
