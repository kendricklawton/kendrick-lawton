'use client'

import { List, Divider, ListItem, ListItemIcon, ListItemText, Paper, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';
import styles from '../page.module.css';
import useTheme from '@mui/material/styles/useTheme';



const linkStyles = {
    width: '100%'
};

export default function ProjectList() {
    const theme = useTheme();

    return (

        <List
            sx={{
                width: '400px',
                alignItems: 'center',
                overflowY: 'auto',
                paddingLeft: 2,
                paddingRight: 2,
            }}
        >
            
            <Link href='https://github.com/kendricklawton/machine-name'
                style={linkStyles}
            >
                <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1, width: '100%', backgroundColor: 'background.paper', marginBottom: 2 }}>
                    <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%', }}>
                        <GitHubIcon sx={{ marginRight: '10px' }} />
                        <ListItemText>Machine Name</ListItemText>
                    </ListItemIcon>
                    <Divider sx={{ width: '100%' }} />
                    <ListItemText sx={{ width: '100%' }} primary="CSS" />
                    <ListItemText sx={{ width: '100%' }} primary="Firebase" />
                    <ListItemText sx={{ width: '100%' }} primary="Next.js" />
                    <ListItemText sx={{ width: '100%' }} primary="Node.js" />
                    <ListItemText sx={{ width: '100%' }} primary="React" />
                    <ListItemText sx={{ width: '100%' }} primary="TypeScript" />
                </ListItem>
            </Link>

            <Link href='https://github.com/kendricklawton/project-auth'
                style={linkStyles}
            >
                <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1, width: '100%', backgroundColor: 'background.paper', marginBottom: 2 }}>
                    <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%', }}>
                        <GitHubIcon sx={{ marginRight: '10px' }} />
                        <ListItemText>Project Auth</ListItemText>
                    </ListItemIcon>
                    <Divider sx={{ width: '100%' }} />
                    <ListItemText sx={{ width: '100%' }} primary="CSS" />
                    <ListItemText sx={{ width: '100%' }} primary="Expo" />
                    <ListItemText sx={{ width: '100%' }} primary="Node.js" />
                    <ListItemText sx={{ width: '100%' }} primary="React Native" />
                    <ListItemText sx={{ width: '100%' }} primary="TypeScript" />
                </ListItem>
            </Link>

            <Link href='https://github.com/kendricklawton/project-control'
                style={linkStyles}
            >
                <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1, width: '100%', backgroundColor: 'background.paper', marginBottom: 2 }}>
                    <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%' }}>
                        <GitHubIcon sx={{ marginRight: '10px' }} />
                        <ListItemText>Project Control</ListItemText>
                    </ListItemIcon>
                    <Divider sx={{ width: '100%' }} />
                    <ListItemText sx={{ width: '100%' }} primary="CSS" />
                    <ListItemText sx={{ width: '100%' }} primary="Expo" />
                    <ListItemText sx={{ width: '100%' }} primary="Node.js" />
                    <ListItemText sx={{ width: '100%' }} primary="React Native" />
                    <ListItemText sx={{ width: '100%' }} primary="TypeScript" />
                </ListItem>
            </Link>

            <Link href='https://github.com/kendricklawton/project-portfolio'
                style={linkStyles}
            >
                <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1, width: '100%', backgroundColor: 'background.paper', }}>
                    <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%' }}>
                        <GitHubIcon sx={{ marginRight: '10px' }} />
                        <ListItemText>Project Portfolio</ListItemText>
                    </ListItemIcon>
                    <Divider sx={{ width: '100%' }} />
                    <ListItemText sx={{ width: '100%' }} primary="CSS" />
                    <ListItemText sx={{ width: '100%' }} primary="Next.js" />
                    <ListItemText sx={{ width: '100%' }} primary="Node.js" />
                    <ListItemText sx={{ width: '100%' }} primary="React" />
                    <ListItemText sx={{ width: '100%' }} primary="TypeScript" />
                </ListItem>
            </Link>

        </List>
    );
}
