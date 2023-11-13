import React from 'react';
import styles from '../page.module.css';
import { Box } from '@mui/material';

interface HomeProps {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Home({ reference }: HomeProps): JSX.Element {
    return (
        <Box className={styles.wrapper} ref={reference}>
            <Box className={styles.containerHome}>
                <h1 style={{
                    fontWeight: '100',
                    fontSize: '4rem',
                }}>
                    Welcome
                </h1>
            </Box>
        </Box>
    );
};