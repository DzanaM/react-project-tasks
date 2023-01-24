import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {
    },
    onLogin: (email: String, password: String) => {
    }
});

export const AuthContextProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate()

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        console.log('sssss')
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        navigate('/login')

    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
        navigate('/home')
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
