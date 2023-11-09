import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Stack } from '@mui/material';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Link from 'next/link';

export default function ExperienceList() {
    return (
        <Stack direction="column" spacing={2}
            sx={{
                width: '500px',
                // height: '100vh',
                alignItems: 'center',
                // justifyContent: 'center',
                // backgroundColor: 'lightgrey',
                overflowY: 'auto',
                // paddingLeft: 2,
                // paddingRight: 2
                padding: 2
            }}
        >
            <ListItem sx={{ display: 'flex', flexDirection: 'column', padding: 1, width: '100%', backgroundColor: 'background.paper', marginBottom: '10px' }}>
                <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%' }}>
                    <WorkHistoryIcon sx={{ marginRight: '10px' }} />
                    <ListItemText>Test Automation Specialist • Clyde & Co</ListItemText>
                </ListItemIcon>

                <ListItemIcon sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px', width: '100%' }}>
                    <DateRangeIcon sx={{
                        marginRight: '10px'
                    }} />
                    <ListItemText>04/2023 - Present</ListItemText>
                </ListItemIcon>
                <Divider sx={{ width: '100%' }} />
                <ListItemText sx={{ width: '100%' }} primary="Azure DevOps" />
                <ListItemText sx={{ width: '100%' }} primary="Eggplant" />
                <ListItemText sx={{ width: '100%' }} primary="Eggplant DAI" />
                <ListItemText sx={{ width: '100%' }} primary="Eggplant Performance" />
                <ListItemText sx={{ width: '100%' }} primary="Selenium" />
            </ListItem>
        </Stack>
    );
}