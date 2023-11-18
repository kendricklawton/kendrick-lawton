'use client'

import React from 'react'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Box, IconButton } from '@mui/material'
import { useThemeContext } from './ThemeProvider'
import styles from '../page.module.css'

export default function Footer() {

    // URLs for social media links
    const gitHubUrl: string = process.env.GITHUB_URL ?? '';
    const linkedInUrl: string = process.env.LINKEDIN_URL ?? '';

    // Acessing toggleTheme function from the theme context using custom hook
    const { toggleTheme } = useThemeContext();

    return (
        // Footer container with defined styles 
        <Box className={styles.footer}>

            {/* Start of footer content */}
            <Box className={styles.footerStart}>
                {/* Additional content or links if needed */}
            </Box>

            {/*Centered section containing socil media icons */}
            <Box className={styles.footerCenter}>
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
            </Box>

            {/* End section containing the toggle for dark mode */}
            <Box className={styles.footerEnd}>
                <IconButton color='primary' aria-label="DarkMode" onClick={toggleTheme} sx={{ marginRight: 1 }}>
                    <DarkModeIcon />
                </IconButton>
            </Box>
        </Box>
    );
}
