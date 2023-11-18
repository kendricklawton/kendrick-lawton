'use client'

import { useState } from 'react';
import styles from '../page.module.css';
import { Button, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ProfessionalList from './ProfessionalList';
import EducationList from './EducationList';

interface ExperienceProps {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Experience({ reference }: ExperienceProps) {
    // State variables to manage the display of different lists
    // const [isCertification, setIsCertification] = useState(false)
    const [isEducation, setIsEducation] = useState(false)
    const [isProfessionl, setIsProfessionl] = useState(true)

    // State variable for the selected toggle button
    const [alignment, setAlignment] = useState('professional');

    // Function to handle changes in toggle button selection
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

    // Functions to handle toggling between different lists
    const handleProfessional = () => {
        // setIsCertification(false);
        setIsEducation(false);
        setIsProfessionl(true);
    }

    const handleEducation = () => {
        // setIsCertification(false);
        setIsEducation(true);
        setIsProfessionl(false);
    }

    // const handleSkills = () => {
    //      setIsCertification(true);
    //      setIsEducation(false);
    //      setIsProfessionl(false);
    // }

    return (
        // Main wrapper box for the component
        <Box className={styles.wrapper} ref={reference}>
            {/* Container for the main heading */}
            <Box className={styles.container}>
                <h1 className={styles.h1}>Experience</h1>
            </Box>
            {/* Secondary container */}
            <Box className={styles.containerTwo}>
                {/* Mobile header */}
                <Box className={styles.listMobileHeader}>
                    <h1 className={styles.h1}>Experience</h1>
                </Box>

                {/* Toggle button group to switch between different lists */}
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {/* Toggle buttons for Professional and Education lists */}
                    <ToggleButton sx={{
                        height: '50px',
                        border: 'none',
                        borderRadius: '0px'
                    }} onClick={handleProfessional} aria-label="Professional" value="professional">Professional</ToggleButton>
                    <ToggleButton sx={{
                        height: '50px',
                        border: 'none',
                        borderRadius: '0px'
                    }} onClick={handleEducation} aria-label="Education" value="education">Education</ToggleButton>
                    {/* <ToggleButton value="certifictions">Certifictions</ToggleButton> */}
                </ToggleButtonGroup>

                {/* Displaying the appropriate list based on the selected toggle button */}
                {isProfessionl && <ProfessionalList />}
                {isEducation && <EducationList />}
                {/* {isSkills && <SkillsList />} */}

                {/* Footer section with a button for Resume */}
                <Box className={styles.listFooter}>
                    <Button sx={{
                        height: '50px',
                        borderRadius: '0px',
                        marginTop: '5px'
                    }}
                        aria-label="Resume"
                        href="/resume.pdf"
                        rel="noopener noreferrer"
                        target="_blank">

                        Resume
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}