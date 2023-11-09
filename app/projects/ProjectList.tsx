import { Divider, ListItem, ListItemIcon, ListItemText, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

export default function ProjectList() {
    return (
        <Stack direction="column" spacing={2}
            sx={{
                width: '400px',
                alignItems: 'center',
                overflowY: 'auto',
                paddingLeft: 2,
                paddingRight: 2
            }}
        >
            <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1, width: '100%', backgroundColor: 'background.paper', }}>
                <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%' }}>
                    <GitHubIcon sx={{ marginRight: '10px' }} />
                    <ListItemText>Kendrick Lawton Portfolio</ListItemText>
                </ListItemIcon>
                <Divider sx={{ width: '100%' }} />
                <ListItemText sx={{ width: '100%' }} primary="Next.js" />
                <ListItemText sx={{ width: '100%' }} primary="Node.js" />
                <ListItemText sx={{ width: '100%' }} primary="React" />
                <ListItemText sx={{ width: '100%' }} primary="Vercel" />
            </ListItem>

            <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1, width: '100%', backgroundColor: 'background.paper', }}>
                <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%' }}>
                    <GitHubIcon sx={{ marginRight: '10px' }} />
                    <ListItemText>Project Auth</ListItemText>
                </ListItemIcon>
                <Divider sx={{ width: '100%' }} />
                <ListItemText sx={{ width: '100%' }} primary="Expo" />
                <ListItemText sx={{ width: '100%' }} primary="Node.js" />
                <ListItemText sx={{ width: '100%' }} primary="React Native" />
            </ListItem>

            <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1, width: '100%', backgroundColor: 'background.paper', }}>
                <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%' }}>
                    <GitHubIcon sx={{ marginRight: '10px' }} />
                    <ListItemText>Project Portfolio</ListItemText>
                </ListItemIcon>
                <Divider sx={{ width: '100%' }} />
                <ListItemText sx={{ width: '100%' }} primary="Next.js" />
                <ListItemText sx={{ width: '100%' }} primary="Node.js" />
                <ListItemText sx={{ width: '100%' }} primary="React" />
            </ListItem>

            <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1, width: '100%', backgroundColor: 'background.paper', }}>
                <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%' }}>
                    <GitHubIcon sx={{ marginRight: '10px' }} />
                    <ListItemText>Machine Name</ListItemText>
                </ListItemIcon>
                <Divider sx={{ width: '100%' }} />
                <ListItemText sx={{ width: '100%' }} primary="Firebase" />
                <ListItemText sx={{ width: '100%' }} primary="Next.js" />
                <ListItemText sx={{ width: '100%' }} primary="Node.js" />
                <ListItemText sx={{ width: '100%' }} primary="React" />
            </ListItem>
        </Stack>
    );
}
