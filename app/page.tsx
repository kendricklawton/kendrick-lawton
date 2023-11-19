'use client';

import { useState, useRef } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Experience from './experience/Experience';
import Footer from './components/Footer'
import Projects from './projects/Projects';
import Home from './home/Home';
import styles from './styles/page.module.css';

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

// AppBar component containing toggle buttons for different sections
const AppBar: React.FC<HeaderProps> = ({ scrollToRef }) => {
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
            <div className={styles.appBarStart}>
                <WavingHandIcon color='primary' />
            </div>

            {/* Right section of the header containing ToggleButtonGroup */}
            <div className={styles.appBarEnd}>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Page Links"
                    sx={ToggleButtonGroupStyles}
                >
                    {/* ToggleButtons for different sections */}
                    <ToggleButton id='toggleButtonHome' aria-label="Home" selected={false} sx={ToggleButtonStyles} onClick={() => scrollToRef('homeRef')} value="home">Home</ToggleButton>
                    <ToggleButton id='toggleButtonExperience' aria-label="Experience" selected={false} sx={ToggleButtonStyles} onClick={() => scrollToRef('experienceRef')} value="experience">Experience</ToggleButton>
                    <ToggleButton id='toggleButtonProject' aria-label="Project" selected={false} sx={ToggleButtonStyles} onClick={() => scrollToRef('projectsRef')} value="projects">Projects</ToggleButton>
                </ToggleButtonGroup>
            </div>
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
            <AppBar scrollToRef={scrollToRef} />
            {/* Sections: Home, Experience, Projects */}
            <Home reference={homeRef} />
            <Experience reference={experienceRef} />
            <Projects reference={projectsRef} />
            <Footer /> {/* Displaying the Footer component */}
        </>
    );
};
