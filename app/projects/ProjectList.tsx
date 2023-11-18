import { Divider, Stack } from '@mui/material';
import styles from '../page.module.css'

// Personal project data (multiple entries)
const personalData = [
  {
    "id": 1,
    "name": "Project Auth",
    "description": "Authentication Mobile Template Built Using Expo & React Native",
  },
  {
    "id": 2,
    "name": "Project Control",
    "description": "Fiance Budget Mobile App Built Using Expo & React Native",
  },
  {
    "id": 3,
    "name": "Project Portfolio",
    "description": "Web Portfolio Template Built Using Next.js & React",
  }
]

export default function ProjectList() {
  return (
    // Stack component to stack elements vertically with spacing and scrollable content
    <Stack spacing={1} sx={{
      width: '100%',
      overflowY: 'auto'
    }}>
      {/* Mapping over each personal project */}
      {personalData.map((project) => (
        // Using a fragment to group elements
        <>
          {/* Stack for displaying project details */}
          <Stack spacing={1}>
            {/* Project name as an h2 heading */}
            <h2 className={styles.h2}>{project.name}</h2>
            {/* Project description as an h3 heading */}
            <h3 className={styles.h3}>• {project.description}</h3>
          </Stack>
          {/* Divider component to separate project entries */}
          <Divider light />
        </>
      ))}
    </Stack>
  );
}
