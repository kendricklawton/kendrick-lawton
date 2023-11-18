import { Box, Divider, List, ListItem, ListItemText, Stack } from '@mui/material';
import styles from '../page.module.css'

// Project data
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
    <li className={styles.list}>
      {/* Mapping over each personal project */}
      {personalData.map((project) => (
        <ul key={project.id}>
          {/* Stack for displaying project details */}
          <Stack spacing={1}>
            {/* Project name as an h2 heading */}
            <h2 className={styles.h2}>{project.name}</h2>
            {/* Project description as an h3 heading */}
            <h3 className={styles.h3}>• {project.description}</h3>
            {/* Divider component to separate project entries */}
            <Divider light />
          </Stack>
        </ul>
      ))}
    </li>
  );
}


