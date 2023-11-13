import React from 'react';
import styles from '../page.module.css';
import { Box } from '@mui/material';
import ExperienceList from './ExperienceList';

export default function Experience() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.container}>

                <h1 style={{
                    fontWeight: '100',
                    fontSize: '4rem'
                }}>Places I've Been</h1>

            </Box>
            <ExperienceList />
        </Box>
    );
};
