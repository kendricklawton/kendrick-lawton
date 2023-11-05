'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const commonThemeOptions = {
    typography: {
        fontFamily: "Hiragino Sans",
    },
};

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#333',
      },
      secondary: {
        main: '#666',
        dark: '#fff',
      },
      background: {
        default: '#222',
        paper: '#333',
      },
    },
    ...commonThemeOptions,
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#CCC',
      },
      secondary: {
        main: '#999',
        light: '#000',
      },
      background: {
        paper: '#F5F5F5',
      },
    },
    ...commonThemeOptions,
  });

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

{/* 
    const isThemeSwitchingEnabled = true; // Feature Flag
    const toggleTheme = () => {
    const body = document.body;
    if (isThemeSwitchingEnabled) {
      setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    }
  }; 

    const body = document.body;

    if (isDarkTheme) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    };
*/}