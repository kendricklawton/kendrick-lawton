import React, { useState } from 'react';
import styles from '../page.module.css';
import { Button, Box } from '@mui/material';

import ProfessionalList from './ProfessionalList';
import EducationList from './EducationList';
// import CertificationList from './CertificationList';

interface ExperienceProps {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Experience({ reference }: ExperienceProps) {
    // const [isCertification, setIsCertification] = useState(false)
    const [isEducation, setIsEducation] = useState(false)
    const [isProfessionl, setIsProfessionl] = useState(true)

    const handleProfessionalClick = () => {
        // setIsCertification(false);
        setIsEducation(false);
        setIsProfessionl(true);
    }

    const handleEducationClick = () => {
        // setIsCertification(false);
        setIsEducation(true);
        setIsProfessionl(false);
    }

    // const handleSkillsClick = () => {
    //      setIsCertification(true);
    //      setIsEducation(false);
    //      setIsProfessionl(false);
    // }

    return (
        <Box className={styles.wrapper} ref={reference}>
            <Box className={styles.container}>
                <h1 style={{
                    fontWeight: '100',
                    fontSize: '4rem'
                }}>Experience</h1>
            </Box>

            <Box className={styles.containerTwo}>
                <Box className={styles.listMobileHeader}>
                    <h1 className={styles.listH1}>Experience</h1>
                </Box>
                <Box sx={{
                    width: '100%',
                    padding: 1,
                    display: 'flex',
                    alignItems: 'center',
                    // backgroundColor: 'green'
                }}>
                    <Button sx={{
                        height: '30px',
                        width: '120x',
                        marginRight: '10px',
                        padding: 1
                    }} variant={isProfessionl ? 'contained' : 'text'} onClick={handleProfessionalClick} children='Professional' />
                    <Button sx={{
                        height: '30px',
                        width: '120x',
                        padding: 1
                    }}
                        variant={isEducation ? 'contained' : 'text'} onClick={handleEducationClick} children='Education' />
                    {/* <Button sx={{
                        height: '30px',
                        width: '120x',
                        padding: 1
                    }}
                        variant={isCertification ? 'contained' : 'text'} onClick={handleCertificationClick} children='Certifictions' /> */}
                </Box>

                {isProfessionl && <ProfessionalList />}
                {isEducation && <EducationList />}
                {/* {isSkills && <SkillsList />} */}

                <Box className={styles.listFooter}>
                    <Button sx={{
                        height: '30px',
                        width: '120x',
                        padding: 1
                    }}
                        href="/resume.pdf"
                        target="_blank"
                        children='Resume' />
                </Box>
            </Box>
        </Box>
    );
}
