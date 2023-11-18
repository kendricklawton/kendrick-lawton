
import { Box, Divider, Stack } from '@mui/material';
import styles from '../page.module.css'

// Education data 
const educationData = [
  {
    "id": 1,
    "name": "Arizona State University",
    "degree": "Bachelor of Science in Software Engineering (BSSE)",
    "date": "December 2022",
  }
]

export default function EducationList() {
  return (
    <li style={{
      width: '100%',
      overflowY: 'auto',
      listStyleType: 'none'
    }}>
      {educationData.map((education) => (
        <ul key={education.id} >
          {/* Stack for displaying certification details */}
          <Stack spacing={1} >
            {/* Education name as an h2 heading */}
            <h2 className={styles.h2}>
              {education.name}
            </h2>
            {/* Education degree as an h3 heading */}
            <h3 className={styles.h3}>
              • {education.degree}
            </h3>
            {/* Education date as an h3 heading */}
            <h3 className={styles.h3}>
              • {education.date}
            </h3>
            {/* Divider component to separate certification entries */}
            <Divider />
          </Stack>
        </ul>
      ))}
    </li>
  );
}
