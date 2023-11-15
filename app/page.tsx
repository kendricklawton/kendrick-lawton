'use client'

import { useState, useRef } from 'react';
import styles from './page.module.css';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Home from './home/Home'

const ToggleButtonStyles =  {
    border: 'none',
    borderRadius: '0px'
}

const ToggleButtonGroupStyles = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: 1 
}

interface HeaderProps {
    scrollToRef: (refName: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToRef }) => {
    const [alignment, setAlignment] = useState('home');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

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
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={ToggleButtonGroupStyles}
                >
                    <ToggleButton selected={false} sx={ToggleButtonStyles} onClick={() => scrollToRef('homeRef')} value="home">Home</ToggleButton>
                    <ToggleButton selected={false} sx={ToggleButtonStyles} onClick={() => scrollToRef('projectsRef')} value="projects">Projects</ToggleButton>
                    <ToggleButton selected={false} sx={ToggleButtonStyles} onClick={() => scrollToRef('experienceRef')} value="experience">Experience</ToggleButton>
                </ToggleButtonGroup>
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
