import styles from '../page.module.css';
import Box from '@mui/material/Box';
import ExperienceList from './ExperienceList';
import Menu from '../components/Menu';

export default function Experience() {
    return (
        <Box className={styles.wrapper}>
             <Menu />
            <Box className={styles.container}>
               <ExperienceList />
            </Box>
        </Box>
    );
};
