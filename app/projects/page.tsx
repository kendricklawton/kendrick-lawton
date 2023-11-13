import React from 'react';
import styles from '../page.module.css';
import { Box } from '@mui/material';
import ProjectList from './ProjectList';

interface Props {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Projects({ reference }: Props) {
    return (
        <Box className={styles.wrapper} ref={reference}>
            <Box className={styles.container}>

                <h1 style={{
                    fontWeight: '100',
                    fontSize: '4rem'
                }}>Creations</h1>

            </Box>
            <ProjectList />
        </Box>
    );
}






