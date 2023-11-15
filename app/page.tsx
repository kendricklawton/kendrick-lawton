'use client'

import React, { useRef } from 'react';
import styles from './page.module.css';
import { Box, Button, Typography } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Home from './home/Home'

interface HeaderProps {
    scrollToRef: (refName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToRef }) => {
    return (
        <Box className={styles.appBar}
            sx={{
                backgroundColor: 'background.default'
            }}
        >
            <Box className={styles.appBarStart}>
                <WavingHandIcon color='primary' sx={{ marginLeft: 1 }} />
            </Box>

            <Box className={styles.appBarEnd}>
                <Button variant='text' sx={{ marginRight: 1 }} onClick={() => scrollToRef('homeRef')}>Home</Button>
                <Button variant='text' sx={{ marginRight: 1 }} onClick={() => scrollToRef('projectsRef')}>Projects</Button>
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
