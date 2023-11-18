import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
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
    // Stack component to stack elements vertically with spacing
    <Stack spacing={1} sx={{
      width: '100%',
      overflowY: 'auto'
    }}>
      {educationData.map((education) => (
        // Using a fragment to group elements
        <>
          {/* Stack for displaying certification details */}
          <Stack spacing={1} key={education.id} >
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
          </Stack>
          
          {/* Divider component to separate certification entries */}
          <Divider light />
        </>
      ))}
    </Stack>
  );
}
