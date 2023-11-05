'use client'

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../page.module.css';
import Box from '@mui/material/Box';

export default function Projects() {

    return (
        <Box className={styles.page}>
            <Box className={styles.pageBoxOne} />
            <Box className={styles.pageBoxTwo} />
            <Box className={styles.pageBoxThree} />
        </Box>
    );
};