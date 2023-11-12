'use client'

import { useEffect, useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import Link from 'next/link';
import styles from '../page.module.css'
import { usePathname } from 'next/navigation'
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useThemeContext } from './ThemeProvider';

export default function Menu() {

  const { toggleTheme } = useThemeContext();

  const pathname = usePathname()

  return (
      <Box className={styles.headerDesktop}>
        <Box className={styles.headerStart}>
          <div style={{
            height: '25%', width: '100%', display: 'flex', alignItems: 'center'
          }}>
            <Typography variant="overline" sx={{
              fontSize: '2rem',
            }}>
              Kendrick Lawton
            </Typography>
          </div>
          <div style={{


            height: '25%', width: '100%', display: 'flex', alignItems: 'center'
          }}>
            <Typography variant="overline" sx={{
              fontSize: '1rem',
            }}>
              Automation & Engineering
            </Typography>
          </div>
        </Box>

        <Box className={styles.headerCenter}>
          {pathname === '/' ? (
            <Typography variant="overline" sx={{ fontSize: '1rem' }}>
              •
            </Typography>
          ) : (
            <Link href="/" rel="noopener noreferrer">
              <Typography variant="overline" sx={{ fontSize: '1rem' }}>
                HOME
              </Typography>
            </Link>
          )}
          <Divider className={styles.dividerStyle} orientation="vertical" flexItem />
          {pathname === '/projects' ? (
            <Typography variant="overline" sx={{ fontSize: '1rem' }}>
            •
          </Typography>
          ) : (
            <Link href="/projects" rel="noopener noreferrer">
              <Typography variant="overline" sx={{ fontSize: '1rem' }}>
                PROJECTS
              </Typography>
            </Link>
          )}
          <Divider className={styles.dividerStyle} orientation="vertical" flexItem />
          {pathname === '/experience' ? (
            <Typography variant="overline" sx={{ fontSize: '1rem' }}>
            •
          </Typography>
          ) : (
            <Link href="/experience" rel="noopener noreferrer">
              <Typography variant="overline" sx={{ fontSize: '1rem' }}>
                EXPERIENCE
              </Typography>
            </Link>)
          }
        </Box>

        <Box className={styles.headerEnd}>

          <Box sx={{
            display: 'flex',
            height: '50px',
            alignItems: 'center',
          }}>
            <Link href="https://www.linkedin.com/in/kendrick-lawton-257684247/" target="_blank" rel="noopener noreferrer">
              <IconButton aria-label="LinkedIn" >
                <LinkedInIcon color='primary' />
              </IconButton>
            </Link>
            <Link href="https://github.com/kendricklawton/" target="_blank" rel="noopener noreferrer" >
              <IconButton aria-label="GitHub">
                <GitHubIcon color='primary' />
              </IconButton>
            </Link>
            <div>
              <IconButton onClick={toggleTheme}>
                <DarkModeIcon color='primary' />
              </IconButton>
            </div>
          </Box>
        </Box>
      </Box>
  );
}
