// ProjectList.js
import { Button, List, ListItemIcon, Typography, Stack, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import styles from '../page.module.css';
import experienceData from './experienceData.json'; 

export default function ExperienceList() {
    return (
        <List className={styles.list}>
            {experienceData .map((experience) => (
                <Button key={experience.id} href={experience.companyUrl} className={styles.listButton}>
                    <Stack spacing={3}>
                    <ListItemIcon className={styles.listItemIcon}>
                        <GitHubIcon color='primary' sx={{ marginRight: '4px' }} />
                        <Typography variant="h2">
                            {experience.name}
                        </Typography>
                    </ListItemIcon>

                    <ListItemIcon className={styles.listItemIcon}>
                        <DescriptionIcon color='primary' sx={{ marginRight: '4px' }} />
                        <Typography variant="h2">
                            Description
                        </Typography>
                    </ListItemIcon>

                    <ListItemIcon className={styles.listItemIcon}>
                        <ConstructionIcon color='primary' sx={{ marginRight: '4px' }} />
                        {experience.technologies.map((tech, index) => (
                            <Typography variant="h2" key={index} sx={{marginRight: '4px' }}>
                                {tech}
                            </Typography>
                        ))}
                    </ListItemIcon>
                    </Stack>
                </Button>
            ))}
        </List>
    );
}
