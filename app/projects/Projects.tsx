
import React from 'react';
import Button  from '@mui/material/Button';
import styles from '../styles/page.module.css'
import ProjectList from './ProjectList';

interface Props {
    reference: React.RefObject<HTMLDivElement>;
}

export default function Projects({ reference }: Props) {
    // URL for project link
    const gitHubUrl = 'https://github.com/kendricklawton';

    return (
         // Main wrapper box for the component
        <div className={styles.wrapper} ref={reference}>
             {/* Container for the main heading */}
            <div className={styles.container}>
                <h1 className={styles.h1}>PROJECTS</h1>
            </div>
             {/* Secondary container */}
            <div className={styles.containerTwo}>
                <div className={styles.listMobileHeader}>
                    <h1 className={styles.h1}>PROJECTS</h1>
                </div>
                  {/* Displaying the project list */}
                  <ProjectList />

                  {/* Footer section with a button for Github */}
                <div className={styles.listFooter}>
                    <Button sx={{
                        height: '50px',
                        borderRadius: '0px',
                    }}
                        href={gitHubUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="Github"
                    >VIEW GITHUB</Button>
                </div>
            </div>
        </div>
    );
}






