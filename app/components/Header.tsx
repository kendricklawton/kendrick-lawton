import { Box, Divider, IconButton, Typography } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Link from 'next/link';
import styles from '../page.module.css'
import { usePathname } from 'next/navigation'

export default function Header() {

  const pathname = usePathname()

  const linkAbout = pathname === '/' ? styles.linkStyleActive : styles.linkStyle;
  const linkProjects = pathname === '/projects' ? styles.linkStyleActive : styles.linkStyle;
  const linkExperience = pathname === '/experience' ? styles.linkStyleActive : styles.linkStyle;

  // const linkMenu = () => {
  //   <Box className={styles.linkMenu}>

  //     {pathname === '/' ? (
  //       <Link href="/" rel="noopener noreferrer" className={styles.linkAbout}>
  //         {isMobile ? 'HOME' : '•'}
  //       </Link>
  //     ) : (
  //       <Link href="/" rel="noopener noreferrer" className={styles.linkStyle}>
  //         HOME
  //       </Link>
  //     )}

  //     <Divider className={styles.dividerStyle} orientation="vertical" flexItem />

  //     {pathname === '/projects' ? (
  //       <Link href="/projects" rel="noopener noreferrer" className={styles.linkProjects}>
  //         {isMobile ? 'PROJECTS' : '•'}
  //       </Link>
  //     ) : (
  //       <Link href="/projects" rel="noopener noreferrer" className={styles.linkStyle}>
  //         PROJECTS
  //       </Link>
  //     )}

  //     <Divider className={styles.dividerStyle} orientation="vertical" flexItem />

  //     {pathname === '/experience' ? (
  //       <Link href="/experience" rel="noopener noreferrer" className={styles.linkExperience}>
  //         {isMobile ? 'EXPERIENCE' : '•'}
  //       </Link>
  //     ) : (
  //       <Link href="/experience" rel="noopener noreferrer" className={styles.linkStyle}>
  //         EXPERIENCE
  //       </Link>
  //     )}

  //   </Box>
  // }

  return (
    <>
      <Box className={styles.headerDesktop}>
        <Box className={styles.headerStart}>
          <Typography sx={{ fontSize: '3rem', fontWeight: '100' }}>
            Kendrick Lawton
          </Typography>
          <Typography sx={{ fontSize: '1rem', fontWeight: '200' }}>
            Test Automation & Software Engineering
          </Typography>
        </Box>

        <Box className={styles.headerCenter}>
          {pathname === '/' ? (
            <a>•</a>
          ) : (
            <Link href="/" rel="noopener noreferrer">
              HOME
            </Link>
          )}
          <Divider className={styles.dividerStyle} orientation="vertical" flexItem />
          {pathname === '/projects' ? (
            <a>•</a>
          ) : (
            <Link href="/projects" rel="noopener noreferrer">
              PROJECTS
            </Link>
          )}
          <Divider className={styles.dividerStyle} orientation="vertical" flexItem />
          {pathname === '/experience' ? (
            <a>•</a>
          ) : (
            <Link href="/experience" rel="noopener noreferrer">
              EXPERIENCE
            </Link>)
          }
        </Box>

        <Box className={styles.headerEnd} />
      </Box>

      {/* Mobile Header */}
      <Box className={styles.headerMobile}
        sx={{
          backgroundColor: 'background.paper'
        }}>
        <Box className={styles.headerStart} />

        <Box className={styles.headerCenter}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: '100' }}>
            Kendrick Lawton
          </Typography>
        </Box>

        <Box className={styles.headerEnd} >
          <IconButton color='secondary' sx={{ marginRight: 1 }}>
            <DragHandleIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
