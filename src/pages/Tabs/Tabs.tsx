import React from 'react';
import {Box, Tab, Typography} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Tabs = () => {

    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box mt={5} alignItems="center" sx={{width: '100%'}}>
            <Typography variant="h3" align="center"> Tabs </Typography>
            <Box>
                <TabContext value={value}>
                    <Box sx={{width: '100%', borderBottom: 1, borderColor: 'primary'}}>

                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Tab One" value="1"/>
                            <Tab label="Tab Two" value="2"/>
                            <Tab label="Tab Three" value="3"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1">Content of tab One</TabPanel>
                    <TabPanel value="2">Content of tab Two</TabPanel>
                    <TabPanel value="3">Content of tab Three</TabPanel>
                </TabContext>
            </Box>
        </Box>
    );
}

export default Tabs;