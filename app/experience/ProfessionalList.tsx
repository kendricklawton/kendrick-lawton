import { Divider, Stack } from '@mui/material';
import Link from 'next/link';
import styles from '../page.module.css'

const experienceData = [
  {
    "id": 1,
    "name": "Clyde & Co",
    "postion": "Test Automation Specialist",
    "date": "April 2023 - Present",
    "company_url": "https://www.clydeco.com/en/locations/north-america/kansas-city",
    "description": "Design Test Automation Frameworks Using Eggplant Test Automation & Selenium Webdriver",
  }
]

export default function ExperienceList() {
  return (

    <Stack spacing={1} sx={{
      width: '100%',
      overflowY: 'auto'
    }}>
      {experienceData.map((experience) => (
        <>
          <Link style={{
            width: '100%', height: '100%',
          }} href={experience.company_url} key={experience.id} target="_blank">
            <Stack spacing={1}>
              <h2 className={styles.h2}>
                {experience.name}
              </h2>
              <h3 className={styles.h3}>
                • {experience.postion}
              </h3>
              <h3 className={styles.h3}>
                • {experience.date}
              </h3>
              <h3
                className={styles.h3}
              >
                • {experience.description}
              </h3>
            </Stack>
          </Link>
          <Divider light />
        </>
      ))}
    </Stack>
  );
}
