'use client'

import { useEffect, useState } from 'react';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Link from 'next/link';
import styles from '../page.module.css'
import { usePathname } from 'next/navigation'

export default function Header() {

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
      <Box id='app-menu' className={styles.linkMenu} 
      sx={{
        backgroundColor: 'background.default',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
      }}
      >
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
