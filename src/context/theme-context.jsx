import React, { createContext } from 'react';
import useTheme from '../hooks/use-theme';

const getInitialTheme = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const storedPrefs = window.localStorage.getItem('theme');
        if (typeof storedPrefs === 'string') {
            return storedPrefs;
        }
    }
    return 'light'; // light theme as the default;
};

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const { theme, setTheme } = useTheme(getInitialTheme);

    const rawSetTheme = (rawTheme) => {
        const root = window.document.body;
        const isDark = rawTheme === 'dark';
        if (theme === 'dark') {
            root.classList.add('bg-darkappbg');
            root.classList.remove('bg-white');
        } else {
            root.classList.remove('bg-darkappbg');
            root.classList.add('bg-white');
        }

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme);

        localStorage.setItem('theme', rawTheme);
    };

    React.useEffect(() => {
        rawSetTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };
