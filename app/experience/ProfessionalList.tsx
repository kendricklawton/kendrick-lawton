import { Box, List, Divider, Stack } from '@mui/material';
import Link from 'next/link';
import styles from '../page.module.css'

const experienceData = [
  {
    "id": 1,
    "name": "Clyde & Co",
    "postion": "Test Automation Specialist",
    "date": "April 2023 - Present",
    "company_url": "https://www.clydeco.com/en/locations/north-america/kansas-city",
    "description": "Design Test Automation Frameworks",
  }
]

export default function ExperienceList() {
  return (
    <Box className={styles.menu}>
      <List sx={{
        width: '100%',
      }}>
        <Stack spacing={1}>
          {experienceData.map((experience) => (
            <>
              <Link style={{
                width: '100%', height: '100%',
              }} href={experience.company_url} key={experience.id} target="_blank">
                <Stack spacing={1}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    backgroundColor: 'green',
                  }}>
                    <h1 className={styles.listH1}>
                      {experience.name}
                    </h1>
                  </Box>
                  <h2 className={styles.listH2}>
                    • {experience.postion}
                  </h2>
                  <h2 className={styles.listH2}>
                    • {experience.date}
                  </h2>
                  <h2
                    className={styles.listH2}
                  >
                    • {experience.description}
                  </h2>
                </Stack>
              </Link>
              <Divider light />
            </>
          ))}
        </Stack>
      </List>
    </Box>
  );
}
