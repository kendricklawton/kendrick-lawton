import { Box, List, Divider, Typography, Button, Stack, ListItemIcon } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import styles from '../page.module.css'


const experienceData = [
  {
    "id": 1,
    "name": "Clyde & Co",
    "postion": "Test Automation Specialist",
    "date": "April 2023 - Present",
    "company_url": "https://www.clydeco.com/en/locations/north-america/kansas-city",
    "description": "Design Test Automation Frameworks",
    "technologies": ["Expo", "JavaScript", "Node.js", "React Native"]
  }
]

export default function ExperienceList() {
  return (
    <Box className={styles.menu}>

      <List sx={{
        width: '100%',

      }}>
        <Stack spacing={3}>
          {experienceData.map((experience, index) => (
            <>
              <Link style={{
                width: '100%', height: '100%',
              }} href={experience.company_url} key={experience.id}  target="_blank">
                <Stack spacing={1}>

                  <h1 style={{
                    fontWeight: '100',
                    fontSize: '3rem'
                  }}>
                    {experience.name}
                  </h1>

                  <h1 style={{
                    fontWeight: '100',
                    fontSize: '1.75rem'
                  }}>
                    • {experience.postion}
                  </h1>

                  <h1 style={{
                    fontWeight: '100',
                    fontSize: '1.75rem'
                  }}>
                    • {experience.date}
                  </h1>

                  <h1 style={{
                    fontWeight: '100',
                    fontSize: '1.75rem'
                  }}>
                    • {experience.description}
                  </h1>
                </Stack>
              </Link>

              {index < experienceData.length - 1 && <Divider light />}
            </>
          ))}
        </Stack>
      </List>

    </Box>
  );
}
