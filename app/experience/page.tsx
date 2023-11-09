import styles from '../page.module.css';
import Box from '@mui/material/Box';
import ExperienceList from './ExperienceList';

export default function Experience() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.container}>
               <ExperienceList />
            </Box>
        </Box>
    );
};
