import { createContext, useEffect, useState } from 'react';

export const AccountContext = createContext();

export const AccountProvider = (props) => {
    const [account, setAccount] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('MACN');
    }, []);

    return (
        <AccountContext.Provider value={{ session, setSession }}>
            {props.children}
        </AccountContext.Provider>
    );
}