'use client'

import { useState } from 'react';
import { Button, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ProfessionalList from './ProfessionalList';
import EducationList from './EducationList';
import SkillList from './SkillList';
import styles from '../styles/page.module.css'

interface ExperienceProps {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Experience({ reference }: ExperienceProps) {
    // State variables to manage the display of different lists
    // const [isCertification, setIsCertification] = useState(false)
    const [isEducation, setIsEducation] = useState(false)
    const [isProfessionl, setIsProfessionl] = useState(true)
    const [isSkill, setIsSkill] = useState(false);

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
        setIsSkill(false);
    }

    const handleEducation = () => {
        // setIsCertification(false);
        setIsEducation(true);
        setIsProfessionl(false);
        setIsSkill(false);
    }

    // const handleCertification = () => {
    //      setIsCertification(true);
    //      setIsEducation(false);
    //      setIsProfessionl(false);
    //      setIsSkill(false);
    // }

    const handleSkill = () => {
        // setIsCertification(false);
         setIsEducation(false);
         setIsProfessionl(false);
         setIsSkill(true);
    }

    return (
        // Main wrapper box for the component
        <div className={styles.wrapper} ref={reference}>
            {/* Container for the main heading */}
            <div className={styles.container}>
                <h1 className={styles.h1}>EXPERIENCE</h1>
            </div>
            {/* Secondary container */}
            <div className={styles.containerTwo}>
                {/* Mobile header */}
                <div className={styles.listMobileHeader}>
                    <h1 className={styles.h1}>EXPERIENCE</h1>
                </div>

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
                    <ToggleButton sx={{
                        height: '50px',
                        border: 'none',
                        borderRadius: '0px'
                    }} onClick={handleSkill} aria-label="Skills" value="skill">Skills</ToggleButton>
                    {/* <ToggleButton sx={{
                        height: '50px',
                        border: 'none',
                        borderRadius: '0px'
                    }} onClick={handleCertification} aria-label="Certification" value="certification">Certification</ToggleButton> */}
                </ToggleButtonGroup>

                {/* Displaying the appropriate list based on the selected toggle button */}
                {isProfessionl && <ProfessionalList />}
                {isEducation && <EducationList />}
                {isSkill && <SkillList />}
                {/* {isCertification && <CertificationList />} */}

                {/* Footer section with a button for Resume */}
                <div className={styles.listFooter}>
                    <Button sx={{
                        height: '50px',
                        borderRadius: '0px',
                    }}
                        aria-label="Resume"
                        href="/resume.pdf"
                        rel="noopener noreferrer"
                        target="_blank">
                        VIEW RESUME
                    </Button>
                </div>
            </div>
        </div>
    );
}