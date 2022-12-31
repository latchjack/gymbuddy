import { useState } from 'react';

const useTheme = (initialState) => {
    const [theme, setTheme] = useState(initialState);

    return {
        theme,
        setTheme
    };
};

export default useTheme;
