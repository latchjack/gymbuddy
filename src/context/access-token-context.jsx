import React, { createContext } from 'react';
import useAccessToken from '../hooks/use-access-token';

const AccessTokenContext = createContext();

function AccessTokenProvider({ children }) {
    const { accessToken, setAccessToken } = useAccessToken();

    return (
        <AccessTokenContext.Provider value={{ accessToken, setAccessToken }}>
            {children}
        </AccessTokenContext.Provider>
    );
}

export { AccessTokenContext, AccessTokenProvider };
