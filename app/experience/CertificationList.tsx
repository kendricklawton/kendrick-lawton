import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import styles from '../page.module.css'

// Certification data
const certificationData = [
  {
    "id": 1,
    "company": "Microsoft Certified",
    "name": "Azure Something",
    "date": "December 2023",
    "certification_url": "https://learn.microsoft.com/en-us/credentials/browse/"
  }
]

export default function CertificationList() {
  return (
    // Stack component to stack elements vertically with spacing
    <Stack spacing={1} sx={{
      width: '100%',
      overflowY: 'auto'
    }}>
      {/* Mapping over each certification entry */}
      {certificationData.map((certification) => (
        // Using a fragment to group elements
        <>
            {/* Stack for displaying certification details */}
            <Stack spacing={1}>
              {/* Certification company as an h2 heading */}
              <h2 className={styles.h2}>
                {certification.company}
              </h2>
              {/* Certification name as an h3 heading */}
              <h3 className={styles.h3}>
                • {certification.name}
              </h3>
              {/* Certification date as an h3 heading */}
              <h3 className={styles.h3}>
                • {certification.date}
              </h3>
            </Stack>

          {/* Divider component to separate certification entries */}
          <Divider light />
        </>
      ))}
    </Stack>
  );
}
