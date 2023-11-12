// ProjectList.js
import { Button, List, ListItemIcon, Typography, Divider, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import styles from '../page.module.css';
import projectsData from './projectsData.json';

export default function ProjectList() {
    return (
        <List className={styles.list}>
            {projectsData.map((project) => (
    
                    <Button key={project.id} href={project.githubUrl} className={styles.listButton}>
                        <Stack spacing={3}>
                            <ListItemIcon className={styles.listItemIcon}>
                                <GitHubIcon color='primary' sx={{ marginRight: '4px' }} />
                                <Typography variant="h2">
                                    {project.name}
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
                                {project.technologies.map((tech, index) => (
                                    <Typography variant="h2" key={index} sx={{ marginRight: '4px' }}>
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
