'use client'

import React from 'react';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, IconButton } from '@mui/material';
import { useThemeContext } from './ThemeProvider';
import styles from '../page.module.css';

export default function Footer() {

    const { toggleTheme } = useThemeContext();

    return (
        <Box className={styles.footer} sx={{ backgroundColor: 'background.paper' }}>
            <Box className={styles.footerStart}>
            </Box>

            <Box className={styles.footerCenter}>
                <Link href="https://www.linkedin.com/in/kendrick-lawton-257684247/" target="_blank" rel="noopener noreferrer">
                    <IconButton aria-label="LinkedIn" color='secondary'>
                        <LinkedInIcon />
                    </IconButton>
                </Link>


                <Link href="https://github.com/kendricklawton/" target="_blank" rel="noopener noreferrer" >
                    <IconButton color='secondary' aria-label="GitHub">
                        <GitHubIcon />
                    </IconButton>
                </Link>
            </Box>

            <Box className={styles.footerEnd}>
                <IconButton color='secondary' onClick={toggleTheme} sx={{ marginRight: 1 }}>
                    <DarkModeIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
