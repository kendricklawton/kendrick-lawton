import styles from '../page.module.css';
import Box from '@mui/material/Box';
import ProjectList from './ProjectList';
import Menu from '../components/Menu';

export default function Projects() {
    return (
        <Box className={styles.wrapper}>
            <Menu />
            <Box className={styles.container}>
                <ProjectList />
            </Box>
        </Box>
    );
};







