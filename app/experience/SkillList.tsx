import { Box, Divider, Stack } from '@mui/material';
import styles from '../page.module.css'

const skillData = [
  {
    "id": 1,
    "title": "Languages",
    "list": "C#, CSS, HTML, Java, JavaScript, Python, SenseTalk, TypeScript",
  },
  {
    "id": 2,
    "title": "Frameworks",
    "list": "Expo, .Net, Next.js, React, React Native",
  },
  {
    "id": 3,
    "title": "Tools",
    "list": "Appium, Azure DevOps, Back4App, Eggplant Test Automation, Firebase, GitHub, Netlify, Selenium, Vercel",
  }
]

export default function SkillList() {
  return (
    <li className={styles.list}>
      {/* Mapping over each professional entry */}
      {skillData.map((skill) => (
        <ul key={skill.id}>
          {/* Stack for displaying professional details */}
          <Stack spacing={1}>
            {/* Professional name as an h2 heading */}
            <h2 className={styles.h2}>
              {skill.title}
            </h2>
            {/* Professional position as an h3 heading */}
            <h3 className={styles.h3}>
              • {skill.list}
            </h3>
            <Divider light />
          </Stack>
          {/* Divider component to separate experience entries */}
        </ul>
      ))}
    </li>
  );
}
