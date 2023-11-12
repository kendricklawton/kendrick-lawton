'use client'


import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#6699cc',
        },
        background: {
            default: '#ECEFF1',
        },
    },
    typography: {
        h2: {
            color: '#767676',
            fontSize: '1.3rem',
        }, 
        overline: {
            color: '#767676',
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
    typography: {
        h2: {
            fontSize: '1.3rem',
        }
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
