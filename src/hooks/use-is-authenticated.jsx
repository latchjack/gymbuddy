import { useState } from 'react';

const useIsAuthenticated = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('access_token') ? true : false
    );

    return {
        isAuthenticated,
        setIsAuthenticated
    };
};

export default useIsAuthenticated;
