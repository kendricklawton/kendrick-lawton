import React from 'react';
import { Button, Box } from '@mui/material';
import styles from '../page.module.css';
import ProjectList from './ProjectList';

interface Props {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Projects({ reference }: Props) {
    return (
        <Box className={styles.wrapper} ref={reference}>
            <Box className={styles.container}>
                <h1 className={styles.h1}>Projects</h1>
            </Box>
            <Box className={styles.containerTwo}>
                <Box className={styles.listMobileHeader}>
                    <h1 className={styles.h1}>Projects</h1>
                </Box>
                <ProjectList />
                <Box className={styles.listFooter}>
                    <Button sx={{
                        height: '50px',
                        borderRadius: '0px'
                    }}
                        href="/resume.pdf"
                        target="_blank"
                    >Resume</Button>
                </Box>
            </Box>
        </Box>
    );
}






