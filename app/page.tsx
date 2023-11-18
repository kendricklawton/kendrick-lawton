'use client';

import { useState, useRef } from 'react';
import styles from './page.module.css';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Home from './home/Home';

// Styles for ToggleButton and ToggleButtonGroup
const ToggleButtonStyles = {
    border: 'none',
    borderRadius: '0px'
};

const ToggleButtonGroupStyles = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
};

// Props for the Header component
interface HeaderProps {
    scrollToRef: (refName: string) => void;
}

// Header component containing toggle buttons for different sections
const Header: React.FC<HeaderProps> = ({ scrollToRef }) => {
    const [alignment, setAlignment] = useState('home');

    // Function to handle toggle button clicks
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
            {/* Left section of the header */}
            <Box className={styles.appBarStart}>
                <WavingHandIcon color='primary' />
            </Box>

            {/* Right section of the header containing ToggleButtonGroup */}
            <Box className={styles.appBarEnd}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={ToggleButtonGroupStyles}
                >
                    {/* ToggleButtons for different sections */}
                    <ToggleButton selected={false} sx={ToggleButtonStyles} onClick={() => scrollToRef('homeRef')} value="home">Home</ToggleButton>
                    <ToggleButton selected={false} sx={ToggleButtonStyles} onClick={() => scrollToRef('experienceRef')} value="experience">Experience</ToggleButton>
                    <ToggleButton selected={false} sx={ToggleButtonStyles} onClick={() => scrollToRef('projectsRef')} value="projects">Projects</ToggleButton>

                </ToggleButtonGroup>
            </Box>
        </Box>
    );
}

// App component with references and sections for Home, Experience, and Projects
export default function App() {
    const homeRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);

    // Function to scroll to the respective section
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
            {/* Header component */}
            <Header scrollToRef={scrollToRef} />
            {/* Sections: Home, Experience, Projects */}
            <Home reference={homeRef} />
            <Experience reference={experienceRef} />
            <Projects reference={projectsRef} />
        </>
    );
};
