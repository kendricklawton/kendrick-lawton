'use client'


import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6699cc', // #0288d1
        },
        background: {
            default: '#ECEFF1',
            paper: '#CCC',
        },
    },
    typography: {
        overline: {
            color: '#4b4b4b',
        },
        body1: {
            color: '#4b4b4b',
        }
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#676767',
        },
    },
}
);

const ThemeContext = createContext({
    toggleTheme: () => { },
    isDarkTheme: true,
});

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const currentTheme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
            <MuiThemeProvider theme={currentTheme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
