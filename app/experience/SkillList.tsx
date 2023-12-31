import { Divider, Stack } from '@mui/material';
import styles from '../styles/page.module.css'

const skillData = [
  {
    "id": 1,
    "title": "Languages",
    "list": "C#, CSS, Dart, HTML, Java, JavaScript, Python, SenseTalk, SQL, TypeScript",
  },
  {
    "id": 2,
    "title": "Frameworks",
    "list": "Expo, Flask, Flutter, .Net, Next.js, React, React Native, Selenium",
  },
  {
    "id": 3,
    "title": "Tools",
    "list": "Azure, Azure DevOps, Eggplant, Firebase, GitHub, Google Cloud, Vercel, Visual Studio, Visual Studio Code",
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
