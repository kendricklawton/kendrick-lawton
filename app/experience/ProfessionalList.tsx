import { Divider, Stack } from '@mui/material';
import styles from '../page.module.css'

const professionalData = [
  {
    "id": 1,
    "name": "Clyde & Co",
    "postion": "Test Automation Specialist",
    "date": "April 2023 - Present",
    "description": "Design Test Automation Frameworks Using Eggplant Test Automation & Selenium Webdriver",
  }
]

export default function ProfessionalList() {
  return (
    // Stack component to stack elements vertically with spacing and scrollable content
    <Stack spacing={1} sx={{
      width: '100%',
      overflowY: 'auto'
    }}>
      {/* Mapping over each professional entry */}
      {professionalData.map((professional) => (
        // Using a fragment to group elements
        <>
         {/* Stack for displaying professional details */}
          <Stack spacing={1} key={professional.id}>
            {/* Professional name as an h2 heading */}
            <h2 className={styles.h2}>
              {professional.name}
            </h2>
            {/* Professional position as an h3 heading */}
            <h3 className={styles.h3}>
              • {professional.postion}
            </h3>
            {/* Professional date as an h3 heading */}
            <h3 className={styles.h3}>
              • {professional.date}
            </h3>
            {/* Professional description as an h3 heading */}
            <h3 className={styles.h3}>
              • {professional.description}
            </h3>
          </Stack>
          {/* Divider component to separate experience entries */}
          <Divider light />
        </>
      ))}
    </Stack>
  );
}
