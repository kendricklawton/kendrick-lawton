import { Box, Divider, List, Typography, Button, Stack, ListItemIcon } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import styles from '../page.module.css'


const projectsData = [
  {
    "id": 1,
    "name": "Project Auth",
    "githubUrl": "https://github.com/kendricklawton/project-auth",
    "description": "React Native Expo Authentication Template",
    "technologies": ["Expo", "JavaScript", "Node.js", "React Native"]
  },
  {
    "id": 2,
    "name": "Project Control",
    "githubUrl": "https://github.com/kendricklawton/project-control",
    "description": "React Native Expo Finance Application",
    "technologies": ["Expo", "JavaScript", "Node.js", "React Native"]
  },
  {
    "id": 3,
    "name": "Project Portfolio",
    "githubUrl": "https://github.com/kendricklawton/project-portfolio",
    "description": "React Next.js Portfolio Template",
    "technologies": ["CSS", "Next.js", "Node.js", "React", "TypeScript"]
  }
]

export default function ProjectList() {
  return (
    <Box className={styles.menu}>

      <List sx={{
        width: '100%',
        //  backgroundColor: 'yellow'
      }}>
        <Stack spacing={3}>
          {projectsData.map((project, index) => (
            <>
              <Link style={{
                width: '100%', height: '100%',
                // backgroundColor: 'brown' 
              }} href={project.githubUrl} key={project.id}  target="_blank" >
                <Stack spacing={1}>

                  <h1 style={{
                    fontWeight: '100',
                    fontSize: '3rem'
                  }}>
                    {project.name}
                  </h1>

                  <h1 style={{
                    // backgroundColor: 'blue',
                   
                    fontWeight: '100',
                    fontSize: '1.75rem'
                  }}>
                    • {project.description}
                  </h1>

                </Stack>
              </Link>

              {index < projectsData.length - 1 && <Divider light />}
            </>
          ))}

        </Stack>
      </List>

    </Box>
  );
}
