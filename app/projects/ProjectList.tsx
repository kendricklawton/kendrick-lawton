import { Button, List,  ListItemIcon, Typography, Divider } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
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

export default function ProjectList() {

    return (
        <List className={styles.list}>
            <Button href='https://github.com/kendricklawton/project-auth' sx={buttonStyle}>
                <ListItemIcon sx={listStyle}>
                    <GitHubIcon color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="h2" sx={{ fontSize: '1.2rem'}}>
                        Project Auth
                    </Typography>
                </ListItemIcon>

                <ListItemIcon sx={listStyle}>
                    <DescriptionIcon  color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="h2" sx={{ fontSize: '1.2rem'}}>
                        Description
                    </Typography>
                </ListItemIcon>

                <ListItemIcon sx={listStyle}>
                    <ConstructionIcon color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="button" sx={{...techStyle, marginRight: '6px'}}>Expo</Typography>
                    <Typography variant="button" sx={{...techStyle, marginRight: '6px'}}>JavaScript</Typography>
                    <Typography variant="button" sx={{...techStyle, marginRight: '6px'}}>Node.js</Typography>
                    <Typography variant="button" sx={ techStyle }>React Native</Typography>
                </ListItemIcon>
            </Button>
        

            <Button href='https://github.com/kendricklawton/project-auth' sx={buttonStyle}>
                <ListItemIcon sx={listStyle}>
                    <GitHubIcon color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="h2" sx={{ fontSize: '1.2rem' }}>
                        Project Control
                    </Typography>
                </ListItemIcon>

                <ListItemIcon sx={listStyle}>
                <DescriptionIcon  color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="h2" sx={{ fontSize: '1.2rem' }}>
                        Description
                    </Typography>
                </ListItemIcon>

                <ListItemIcon sx={listStyle}>
                    <ConstructionIcon color='primary' sx={{ marginRight: '6px' }} />
                    <Typography sx={{...techStyle, marginRight: '6px'}}>Expo</Typography>
                    <Typography sx={{...techStyle, marginRight: '6px'}}>JavaScript</Typography>
                    <Typography sx={{...techStyle, marginRight: '6px'}}>Node.js</Typography>
                    <Typography sx={techStyle}>React Native</Typography>
                </ListItemIcon>
            </Button>

   
            <Button href='https://github.com/kendricklawton/project-auth' sx={buttonStyle}>
                <ListItemIcon sx={listStyle}>
                    <GitHubIcon color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="h2" sx={{ fontSize: '1.2rem' }}>
                        Project Portfolio
                    </Typography>
                </ListItemIcon>

                <ListItemIcon sx={listStyle}>
                <DescriptionIcon  color='primary' sx={{ marginRight: '6px' }} />
                    <Typography variant="h2" sx={{ fontSize: '1.2rem' }}>
                        Description
                    </Typography>
                </ListItemIcon>

                <ListItemIcon sx={listStyle}>
                    <ConstructionIcon color='primary' sx={{ marginRight: '6px' }} />
                    <Typography sx={{...techStyle, marginRight: '6px'}}>CSS</Typography>
                    <Typography sx={{...techStyle, marginRight: '6px'}}>Next.js</Typography>
                    <Typography sx={{...techStyle, marginRight: '6px'}}>Node.js</Typography>
                    <Typography sx={{...techStyle, marginRight: '6px'}}>React</Typography>
                    <Typography sx={techStyle}>TypeScript</Typography>
                </ListItemIcon>
    
            </Button>
        </List>
    );
}
