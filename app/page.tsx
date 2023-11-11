import styles from './page.module.css';
import Box from '@mui/material/Box';
import ExperienceList from './experience/ExperienceList';

export default function Home() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.container}>
                <Box
                    sx={{
                        width: '320px',
                        alignItems: 'center',
                        overflowY: 'auto',
                        height: '100%',

                    }}>

                    <p>
                        Hello, I'm Kendrick Lawton, a dynamic individual with a passion for
                        shaping the digital landscape through innovative software solutions.
                        Professionally, I specialize in crafting robust and efficient test
                        automation frameworks, ensuring the reliability and quality of software
                        products. My expertise lies in seamlessly blending creativity with
                        technical prowess. In my free time, I channel my creativity into
                        designing captivating web and mobile applications. This dual passion
                        allows me to bring a unique perspective to both my professional
                        and personal projects, fostering a holistic approach to software development.
                    </p>



                    {/* <p style={{ fontSize: '1em', fontWeight: 'bold'}}>
                        Hello, I'm Kendrick Lawton, a recent graduate with a Bachelor of Science in Software Engineering. Fresh out of the academic world, I'm on a mission to explore the vast realm of technology, from IoT to programming, automation, AI, machine learning, cloud, and beyond. If it's tech-related, you can bet I want to know about it.
                    </p>
           */}
                </Box>
            </Box>
        </Box>
    );
};