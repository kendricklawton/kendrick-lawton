import { Divider, Stack } from '@mui/material';
import styles from '../styles/page.module.css'

// Project data
const personalData = [
  {
    "id": 1,
    "name": "Kendrick Lawton",
    "description": "My personal portfolio built with Next.js, Node.js, React, TypeScript, & deployed with Vercel.",
    "link": "https://github.com/kendricklawton/kendrick-lawton"
  },
  {
    "id": 2,
    "name": "Project Auth",
    "description": "An authentication mobile template built with Expo, Firebase, JavaScript, Node.js, & React Native.",
    "link": "https://github.com/kendricklawton/project-auth"
  }
]

export default function ProjectList() {

  const gitHubUrl = 'https://github.com/kendricklawton';

  return (
    <li className={styles.list}>
      {/* Mapping over each personal project */}
      {personalData.map((project) => (
        <ul key={project.id}>
          {/* Stack for displaying project details */}
          <Stack spacing={1}>
            {/* Project name as an h2 heading */}
            <h2 className={styles.h2} style={{ marginRight: '5px' }}>{project.name}</h2>
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


