import { Box, Divider, IconButton, List, ListItem, ListItemText, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from 'next/link'
import styles from '../page.module.css'


// Project data
const personalData = [
  {
    "id": 1,
    "name": "Kendrick Lawton",
    "description": "My Personal Portfolio Built Using Next.js, MUI, React, & Hosted Using Vercel",
    "link": "https://github.com/kendricklawton/kendrick-lawton"
  },
  {
    "id": 2,
    "name": "Project Auth",
    "description": "Authentication Mobile Template Built Using Expo & React Native",
    "link": "https://github.com/kendricklawton/project-auth"
  },
  {
    "id": 3,
    "name": "Project Control",
    "description": "Fiance Budget Mobile App Built Using Expo & React Native",
    "link": "https://github.com/kendricklawton/project-control"
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
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '60px'
            }}>
              <h2 className={styles.h2} style={{marginRight: '5px'}}>{project.name}</h2>
              <Link href={project.link} target="_blank" rel="noopener noreferrer" >
                <IconButton color='primary' aria-label="GitHub">
                  <GitHubIcon />
                </IconButton>
              </Link>
            </Box>


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


