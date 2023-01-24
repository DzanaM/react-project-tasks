import * as React from 'react';
import {Box, Tab, Tabs, Typography} from '@mui/material';
import SquareIcon from '@mui/icons-material/Square';
import RectangleIcon from '@mui/icons-material/Rectangle';
import CircleIcon from '@mui/icons-material/Circle';
import Square from "../../components/Perimeter&AreaForm/Square";
import Rectangle from "../../components/Perimeter&AreaForm/Rectangle";
import Circle from "../../components/Perimeter&AreaForm/Circle";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function PerimeterAndArea() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <div>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Square" icon={<SquareIcon/>} {...a11yProps(0)} />
                    <Tab label="Rectangle" icon={<RectangleIcon/>} {...a11yProps(1)} />
                    <Tab label="Circle" icon={<CircleIcon/>} {...a11yProps(2)} />
                </Tabs>
            </div>
            <Box m={5}>
                <Typography variant="h3" align="center">Calculate area and perimeter of </Typography>

                <TabPanel value={value} index={0}>
                    <Square/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Rectangle/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Circle/>
                </TabPanel>
            </Box>
        </Box>

    );
}
