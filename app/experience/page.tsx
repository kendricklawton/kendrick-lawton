import React from 'react';
import styles from '../page.module.css';
import { Box } from '@mui/material';
import ExperienceList from './ExperienceList';

interface Props {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Experience({ reference }: Props) {
    return (
        <Box className={styles.wrapper} ref={reference}>
            <Box className={styles.container}>

                <h1 style={{
                    fontWeight: '100',
                    fontSize: '4rem'
                }}>Places</h1>

            </Box>
            <ExperienceList />
        </Box>
    );
}
