import { Box, List, Divider, Stack } from '@mui/material';
import Link from 'next/link';
import styles from '../page.module.css'

const educationData = [
  {
    "id": 1,
    "name": "Arizona State University",
    "degree": "Bachelor of Science in Software Engineering (BSSE)",
    "date": "December 2022",
    "school_url": "https://www.clydeco.com/en/locations/north-america/kansas-city"
  }
]

export default function EducationList() {
  return (
    <Box className={styles.menu}>
      <List sx={{
        width: '100%',
      }}>
        <Stack spacing={1}>
          {educationData.map((education) => (
            <>
              <Link style={{
                width: '100%', height: '100%',
              }} href={education.school_url} key={education.id} target="_blank">
                <Stack spacing={1}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    backgroundColor: 'green',
                  }}>
                    <h1 className={styles.listH1}>
                      {education.name}
                    </h1>
                  </Box>
                  <h2 className={styles.listH2}>
                    • {education.degree}
                  </h2>
                  <h2 className={styles.listH2}>
                    • {education.date}
                  </h2>
                </Stack>
              </Link>
              <Divider light />
            </>
          ))}
        </Stack>
      </List>
    </Box>
  );
}
