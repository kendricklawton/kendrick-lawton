import React from 'react';
import { Button, Box } from '@mui/material';
import styles from '../page.module.css';
import ProjectList from './ProjectList';

interface Props {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Projects({ reference }: Props) {
    return (
         // Main wrapper box for the component
        <Box className={styles.wrapper} ref={reference}>
             {/* Container for the main heading */}
            <Box className={styles.container}>
                <h1 className={styles.h1}>Projects</h1>
            </Box>
             {/* Secondary container */}
            <Box className={styles.containerTwo}>
                <Box className={styles.listMobileHeader}>
                    <h1 className={styles.h1}>Projects</h1>
                </Box>
                  {/* Displaying the project list */}
                  <ProjectList />

                  {/* Footer section with a button for Github */}
                <Box className={styles.listFooter}>
                    <Button sx={{
                        height: '50px',
                        borderRadius: '0px',
                        marginTop: '5px'
                    }}
                        href="https://github.com/kendricklawton/"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Github"
                    >GitHub</Button>
                </Box>
            </Box>
        </Box>
    );
}






