import React from 'react';
import styles from '../page.module.css';
import { Box } from '@mui/material';
import ProjectList from './ProjectList';

export default function Projects(){
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.container}>

                <h1 style={{
                    fontWeight: '100',
                    fontSize: '4rem'
                }}>
                    My Projects
                </h1>

            </Box>

            <ProjectList />
        </Box>
    );
};







