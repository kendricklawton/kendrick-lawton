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

  },
  // {
  //   "id": 4,
  //   "name": "Project Portfolio",
  //   "githubUrl": "https://github.com/kendricklawton/project-portfolio",
  //   "description": "A Web Portfolio Template Built Using Next.js & React",
  //   "technologies": ["CSS", "Next.js", "Node.js", "React", "TypeScript"]
  // }
]

export default function ProjectList() {

  const Personal = () => {
    return (
      <List sx={{
        width: '100%',
        height: '100%'
      }}>
        <Stack spacing={1}>
          {personalData.map((project) => (
            <>
              <Stack spacing={1}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  alignItems: 'center',
                  backgroundColor: 'green',
                }}>
                  <IconButton aria-label="github" sx={{ marginRight: '10px' }}>
                    <GitHub />
                  </IconButton>
                  <h1 className={styles.listH1}>{project.name}</h1>
                </Box>
                <h2 className={styles.listH2}>• {project.description}</h2>
              </Stack>
              <Divider light />
            </>
          ))}
        </Stack>
      </List>
    );
  }

  return (
    <Box className={styles.menu}>
      <Personal />
    </Box>
  );
}
