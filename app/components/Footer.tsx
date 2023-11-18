'use client'

import React from 'react'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IconButton from '@mui/material/IconButton'
import { useThemeContext } from './ThemeProvider'
import styles from '../styles/page.module.css'

export default function Footer() {

    // URLs for social media links
    const gitHubUrl = 'https://github.com/kendricklawton';
    const linkedInUrl = 'https://www.linkedin.com/in/kendrick-lawton-257684247/';

    // Acessing toggleTheme function from the theme context using custom hook
    const { toggleTheme } = useThemeContext();

    return (
        // Footer container with defined styles 
        <div className={styles.footer}>

            {/* Start of footer content */}
            <div className={styles.footerStart}>
                <h4 className={styles.h4}>© 2023 Kendrick Lawton</h4>
            </div>

            {/*Centered section containing socil media icons */}
            <div className={styles.footerCenter}>
                {/* LinkedIn link wrapped in a IconButton */}
                <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                    <IconButton color='primary' aria-label="LinkedIn" >
                        <LinkedInIcon />
                    </IconButton>
                </Link>

                {/* GitHub link wrapped in a IconButton */}
                <Link href={gitHubUrl} target="_blank" rel="noopener noreferrer" >
                    <IconButton color='primary' aria-label="GitHub">
                        <GitHubIcon />
                    </IconButton>
                </Link>
            </div>

            {/* End section containing the toggle for dark mode */}
            <div className={styles.footerEnd}>
                <IconButton color='primary' aria-label="DarkMode" onClick={toggleTheme}>
                    <DarkModeIcon />
                </IconButton>
            </div>
        </div>
    );
}
