import { useState } from 'react';

const useAccessToken = () => {
    const [accessToken, setAccessToken] = useState(null);

    return {
        accessToken,
        setAccessToken
    };
};

export default useAccessToken;
