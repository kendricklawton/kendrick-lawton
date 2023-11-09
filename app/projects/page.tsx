import styles from '../page.module.css';
import Box from '@mui/material/Box';
import ProjectList from './ProjectList';

export default function Projects() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.container}>
                <ProjectList />
            </Box>
        </Box>
    );
};







