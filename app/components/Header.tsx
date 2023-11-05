'use client'

import React, { useEffect, useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import WavingHandTwoToneIcon from '@mui/icons-material/WavingHandTwoTone';
import Link from 'next/link';
import styles from '../page.module.css'
import { usePathname } from 'next/navigation'

export default function Header() {

  const pathname = usePathname()

  const linkAbout = pathname === '/' ? styles.linkStyleActive : styles.linkStyle;
  const linkProjects = pathname === '/projects' ? styles.linkStyleActive : styles.linkStyle;
  const linkExperience = pathname === '/experience' ? styles.linkStyleActive : styles.linkStyle;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Box className={styles.header}
      sx={{ backgroundColor: isMobile ? 'background.paper' : '' }}
    >
      <Box className={styles.headerBoxOneDesktop}>
        <Typography sx={{ fontSize: '3rem', fontWeight: '100' }}>
          Kendrick Lawton
        </Typography>
        <Typography sx={{ fontSize: '1rem', fontWeight: '200' }}>
          Test Automation & Software Engineering
        </Typography>
      </Box>
      <Box className={styles.headerBoxOneMobile}>
        <WavingHandTwoToneIcon sx={{ ml: 2 }} />
      </Box>
      <Box className={styles.headerBoxTwo}>


      
        {pathname === '/' ? (
          <Link href="/" rel="noopener noreferrer" className={linkAbout}>
            {isMobile ? 'ABOUT' : '•'}
          </Link>
        ) : (
          <Link href="/" rel="noopener noreferrer" className={styles.linkStyle}>
            ABOUT
          </Link>
        )}

        <Divider className={styles.dividerStyle} orientation="vertical" flexItem />

        {pathname === '/projects' ? (
          <Link href="/projects" rel="noopener noreferrer" className={linkProjects}> 
            {isMobile ? 'PROJECTS' : '•'}
          </Link>
        ) : (
          <Link href="/projects" rel="noopener noreferrer" className={styles.linkStyle}>
            PROJECTS
          </Link>
        )}

        <Divider className={styles.dividerStyle} orientation="vertical" flexItem />

        {pathname === '/experience' ? (
          <Link href="/experience" rel="noopener noreferrer" className={linkExperience}> 
            {isMobile ? 'EXPERIENCE' : '•'}
          </Link>
        ) : (
          <Link href="/experience" rel="noopener noreferrer" className={styles.linkStyle}>
            EXPERIENCE
          </Link>
        )}

      </Box>
      <Box className={styles.headerBoxThree} />
    </Box>
  );
}
