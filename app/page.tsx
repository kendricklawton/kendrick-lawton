import React from 'react';
import styles from './page.module.css';
import { Box } from '@mui/material';

export default function Home() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.containerHome}>
                <h1 style={{
                    fontWeight: '100',
                    fontSize: '4rem'
                }}>
                    Welcome
                </h1>
            </Box>
        </Box>
    );
}