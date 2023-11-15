import { Box, Divider, List, Stack, IconButton } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import Link from 'next/link';
import styles from '../page.module.css'

const personalData = [
  {
    "id": 1,
    "name": "Project Auth",
    "githubUrl": "https://github.com/kendricklawton/project-auth",
    "description": "An Authentication Template Built Using Expo & React Native",

  },
  {
    "id": 2,
    "name": "Project Control",
    "githubUrl": "https://github.com/kendricklawton/project-control",
    "description": "A Fiance Budget App Built Using Expo & React Native",

  },
  {
    "id": 3,
    "name": "Project Portfolio",
    "githubUrl": "https://github.com/kendricklawton/project-portfolio",
    "description": "A Web Portfolio Template Built Using Next.js & React",

  }
]

export default function ProjectList() {
  return (
    <Stack spacing={1} sx={{
      width: '100%',
      overflowY: 'auto'
    }}>
      {personalData.map((project) => (
        <>
          <Stack spacing={1}>
            <h2 className={styles.h2}>{project.name}</h2>
            <h3 className={styles.h3}>• {project.description}</h3>
          </Stack>
          <Divider light />
        </>
      ))}
    </Stack>
  );
}
