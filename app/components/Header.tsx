'use client'

import { useEffect, useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Link from 'next/link';
import styles from '../page.module.css'
import { usePathname } from 'next/navigation'
import GitHubIcon from '@mui/icons-material/GitHub';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useThemeContext } from './ThemeProvider';

export default function Header() {

  const { toggleTheme } = useThemeContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname()

  const linkHome = pathname === '/' ? styles.linkStyleActive : styles.linkStyle;
  const linkProjects = pathname === '/projects' ? styles.linkStyleActive : styles.linkStyle;
  const linkExperience = pathname === '/experience' ? styles.linkStyleActive : styles.linkStyle;

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isMenuOpen) {
        if (
          event.target instanceof Element &&
          !event.target.closest('#app-menu')
        ) {
          closeMenu();
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  const LinkMenu = () => {
    return (
      <Box id='app-menu' className={styles.linkMenu}>
        <Link href="/" rel="noopener noreferrer" className={linkHome}>
          HOME
        </Link>
        <Divider className={styles.dividerStyle} orientation="vertical" flexItem />
        <Link href="/projects" rel="noopener noreferrer" className={linkProjects}>
          PROJECTS
        </Link>
        <Divider className={styles.dividerStyle} orientation="vertical" flexItem />
        <Link href="/experience" rel="noopener noreferrer" className={linkExperience}>
          EXPERIENCE
        </Link>
      </Box>
    );
  }

  return (
    <>
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
              fontSize: '1.5rem',
            }}>
              Automation & Engineering
            </Typography>
          </div>
        </Box>

        <Box className={styles.headerCenter}>
          {pathname === '/' ? (
            <Typography variant="overline" sx={{ fontSize: '1.5rem' }}>
              •
            </Typography>
          ) : (
            <Link href="/" rel="noopener noreferrer">
              <Typography variant="overline" sx={{ fontSize: '1.5rem' }}>
                HOME
              </Typography>
            </Link>
          )}
          <Divider className={styles.dividerStyle} orientation="vertical" flexItem />
          {pathname === '/projects' ? (
            <Typography variant="h2" sx={{ fontSize: '1.5rem' }}>
            •
          </Typography>
          ) : (
            <Link href="/projects" rel="noopener noreferrer">
              <Typography variant="overline" sx={{ fontSize: '1.5rem' }}>
                PROJECTS
              </Typography>
            </Link>
          )}
          <Divider className={styles.dividerStyle} orientation="vertical" flexItem />
          {pathname === '/experience' ? (
            <Typography variant="overline" sx={{ fontSize: '1.5rem' }}>
            •
          </Typography>
          ) : (
            <Link href="/experience" rel="noopener noreferrer">
              <Typography variant="overline" sx={{ fontSize: '1.5rem' }}>
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

      {/* Mobile Header */}
      <Box className={styles.headerMobile}

      >
        <Box className={styles.headerStart} />

        <Box className={styles.headerCenter}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: '100' }}>
            Kendrick Lawton
          </Typography>
        </Box>

        <Box className={styles.headerEnd} >
          <IconButton onClick={handleMenu} color='secondary' sx={{ marginRight: 1 }}>
            <DragHandleIcon color='primary' />
          </IconButton>
        </Box>
      </Box>

      {isMenuOpen && <LinkMenu />}
    </>
  );
}
