import styles from './page.module.css';
import Box from '@mui/material/Box';

export default function Home() {
    return (
        <Box className={styles.wrapper}>
            <Box className={styles.container}>
                <div style={{ width: '400px', margin: '0 auto' }}>
                    <a style={{ textDecoration: 'none', color: 'black' }}>
                        <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                            <p style={{ fontSize: '1.2em', fontWeight: 'bold', margin: '10px 0' }}>
                                Hello, I'm Kendrick Lawton, a recent graduate with a Bachelor of Science in Software Engineering. Fresh out of the academic world, I'm on a mission to explore the vast realm of technology, from IoT to programming, automation, AI, machine learning, cloud, and beyond. If it's tech-related, you can bet I want to know about it.
                            </p>
                            <p>
                                By day, I serve as a test automation specialist at a law firm, ensuring the efficiency and reliability of software systems. But my journey doesn't stop there. I'm a passionate creator of web and mobile applications, constantly innovating and bringing ideas to life. With a logical mindset and a deep understanding of the development process, I'm committed to delivering top-notch software experiences.
                            </p>
                            <p>
                                What truly ignites my enthusiasm is the limitless potential of technology. Whether it's automating tasks, diving into AI, exploring IoT applications, or harnessing the power of machine learning, I'm here to learn, adapt, and innovate.
                            </p>
                            <p>
                                Welcome to my portfolio, where I showcase a diverse range of projects that embody my wide-ranging interests. Whether you're here to explore my work, collaborate on projects, or engage in discussions about the fascinating world of technology, I'm excited to connect with like-minded individuals. Let's dive into the ever-evolving world of tech and build something remarkable together!
                            </p>
                        </div>
                    </a>
                </div>

            </Box>
        </Box>
    );
};