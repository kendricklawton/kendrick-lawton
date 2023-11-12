import styles from './page.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.container} sx={{ justifyContent: 'center' }}>
                <Box className={styles.about}>
                    <Typography variant="body1" fontSize={20}>
                        Hello! My name is Kendrick, I'm a dynamic professional with
                        a passion for shaping the digital landscape through innovative
                        software solutions. By day, I specialize in crafting robust and
                        efficient test automation frameworks, ensuring the reliability
                        and quality of software products. My expertise lies in seamlessly
                        blending creativity with technical prowess.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};