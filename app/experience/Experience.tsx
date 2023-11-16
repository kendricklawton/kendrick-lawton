import { useState } from 'react';
import styles from '../page.module.css';
import { Button, Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

import ProfessionalList from './ProfessionalList';
import EducationList from './EducationList';

interface ExperienceProps {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Experience({ reference }: ExperienceProps) {
    // const [isCertification, setIsCertification] = useState(false)
    const [isEducation, setIsEducation] = useState(false)
    const [isProfessionl, setIsProfessionl] = useState(true)

    const [alignment, setAlignment] = useState('professional');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };

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
        <Box className={styles.wrapper} ref={reference}>
            <Box className={styles.container}>
                <h1 className={styles.h1}>Experience</h1>
            </Box>

            <Box className={styles.containerTwo}>
                <Box className={styles.listMobileHeader}>
                    <h1 className={styles.h1}>Experience</h1>
                </Box>

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
                    <ToggleButton sx={{
                        height: '50px',
                        border: 'none',
                        borderRadius: '0px'
                    }} onClick={handleProfessional} value="professional">Professional</ToggleButton>
                    <ToggleButton sx={{
                        height: '50px',
                        border: 'none',
                        borderRadius: '0px'
                    }} onClick={handleEducation} value="education">Education</ToggleButton>
                    {/* <ToggleButton value="certifictions">Certifictions</ToggleButton> */}
                </ToggleButtonGroup>
            
                {isProfessionl && <ProfessionalList />}
                {isEducation && <EducationList />}
                {/* {isSkills && <SkillsList />} */}

                <Box className={styles.listFooter}>
                    <Button sx={{
                        height: '50px',
                        borderRadius: '0px'
                    }}
                        href="/resume.pdf"
                        target="_blank">
                        Resume
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}