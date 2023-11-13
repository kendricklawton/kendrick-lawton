'use client'

import React, { useRef } from 'react';
import styles from './page.module.css';
import { Box, Button, Typography } from '@mui/material';
import Experience from './experience/page';
import Home from './home/page';
import Projects from './projects/page';

interface HeaderProps {
    scrollToRef: (refName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToRef }) => {
    return (
        <Box className={styles.header}>
            <Box className={styles.headerStart}>
                <Typography color='primary' variant="overline" sx={{ fontSize: '1.5rem', marginLeft: 1 }}>Kendrick Lawton</Typography>
            </Box>

            <Box className={styles.headerEnd}>
                <Button variant='text' onClick={() => scrollToRef('homeRef')}>Home</Button>
                <Button variant='text' onClick={() => scrollToRef('projectsRef')}>Projects</Button>

                <Button variant='text' sx={{ marginRight: 1 }} onClick={() => scrollToRef('experienceRef')}>Experience</Button>
            </Box>
        </Box>
    );
}


export default function App() {
    const homeRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    const scrollToRef = (refName: string) => {
        const ref = refName === 'homeRef'
            ? homeRef
            : refName === 'projectsRef'
                ? projectsRef
                : experienceRef;

        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Header scrollToRef={scrollToRef} />
            <Home reference={homeRef} />
            <Projects reference={projectsRef} />
            <Experience reference={experienceRef} />
        </>
    );
};
