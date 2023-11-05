import styles from '../page.module.css';
import Box from '@mui/material/Box';

export default function Experience() {
    return (
        <Box className={styles.page}>
            <Box className={styles.pageBoxOne} />
            <Box className={styles.pageBoxTwo} />
            <Box className={styles.pageBoxThree} />
        </Box>
    );
};