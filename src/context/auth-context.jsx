import React, { createContext } from 'react';
import useIsAuthenticated from '../hooks/use-is-authenticated';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const { isAuthenticated, setIsAuthenticated } = useIsAuthenticated();

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthContextProvider };
