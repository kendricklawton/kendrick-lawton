import { Button, List,  ListItemIcon, Typography, Divider } from '@mui/material'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ConstructionIcon from '@mui/icons-material/Construction';
import DescriptionIcon from '@mui/icons-material/Description';
import styles from '../page.module.css';

const techStyle = {
    fontSize: '0.75rem',
    backgroundColor: 'primary.main',
    padding: '6px',
    borderRadius: '4px',
    textAlign: 'center'
}
const listStyle = {
    display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', padding: 1
}

const buttonStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '12px'
}

export default function ExperienceList() {

    return (
        <List className={styles.list}>
            <Button href='https://github.com/kendricklawton/project-auth' sx={buttonStyle}>
                <ListItemIcon sx={listStyle}>
       
                 <WorkHistoryIcon color='primary' sx={{ marginRight: '6px' }} />
               <Typography variant="h2" sx={{ fontSize: '1.2rem' }}>
                      Test Automation Specialist • Clyde & Co
                   </Typography>
                </ListItemIcon>

                <ListItemIcon sx={listStyle}>
                    <DateRangeIcon color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="h2" sx={{ fontSize: '1.2rem'}}>
                        April 2023 - Present
                    </Typography>
                </ListItemIcon>

                <ListItemIcon sx={listStyle}>
                    <DescriptionIcon color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="body1" sx={{ fontSize: '1.2rem'}}>
                        Design & Implement Test Automation Frameworks
                    </Typography>
                </ListItemIcon>

                <ListItemIcon sx={listStyle}>
                    <ConstructionIcon color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="button" sx={{...techStyle, marginRight: '6px'}}>Azure DevOps</Typography>
                    <Typography variant="button" sx={{...techStyle, marginRight: '6px'}}>C#</Typography>
                    <Typography variant="button" sx={{...techStyle, marginRight: '6px'}}>Eggplant</Typography>
                    <Typography variant="button" sx={{...techStyle, marginRight: '6px'}}>Java</Typography>
                    <Typography variant="button" sx={{...techStyle, marginRight: '6px'}}>Selenium</Typography>
                </ListItemIcon>
            </Button>
        </List>
    );
}
