import styles from './page.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Menu from './components/Menu';

export default function Home() {
    return (
        <Box className={styles.wrapper}>
            <Menu />
            <Box className={styles.container} sx={{ justifyContent: 'center' }}>
                <Box className={styles.about}>
                    <Typography variant="h2">
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