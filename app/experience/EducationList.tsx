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

    <Stack spacing={1} sx={{
      width: '100%',
      // overflowY: 'auto'
    }}>
      {educationData.map((education) => (
        <>
          <Link style={{
            width: '100%', height: '100%',
          }} href={education.school_url} key={education.id} target="_blank">
            <Stack spacing={1}>
              <h2 className={styles.h2}>
                {education.name}
              </h2>
              <h3 className={styles.h3}>
                • {education.degree}
              </h3>
              <h3 className={styles.h3}>
                • {education.date}
              </h3>
            </Stack>
          </Link>
          <Divider light />
        </>
      ))}
    </Stack>
  );
}
