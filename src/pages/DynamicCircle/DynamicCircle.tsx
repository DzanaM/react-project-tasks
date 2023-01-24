import React, {useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import styles from "../../config/Styles.module.css"

const DynamicCircle = () => {
    const [width, setWidth] = useState(100);
    const [height, setHeight] = useState(100);
    const [color, setColor] = useState('white');

    const increaseHandler = () => {
        setWidth(width + 10);
        setHeight(height + 10);
    }

    const decreaseHandler = () => {
        setWidth(width - 10);
        setHeight(height - 10);
    }

    const changeColorHandler = () => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = `rgb(${r},${g},${b})`;
        setColor(color);
    }

    const resetHandler = () => {
        setWidth(width);
        setHeight(height);
        setColor('white');
    }


    return (
        <Box mt={5}>
            <Typography variant="h3" align="center">Dynamic Circle</Typography>
            <Box p={5}>
                <div>
                    <Button variant="contained" sx={{m: 2}} onClick={increaseHandler}><PlusOneIcon/></Button>
                    <Button variant="contained" sx={{m: 2}} onClick={decreaseHandler}><RemoveIcon/></Button>
                    <Button variant="contained" sx={{m: 2}} onClick={changeColorHandler}><ColorLensIcon/></Button>
                    <Button variant="contained" sx={{m: 2}} onClick={resetHandler}><RestartAltIcon/></Button>
                </div>
                <div className={styles.display}>
                    <div className={styles.circle} style={{width, height, backgroundColor: color}}></div>
                </div>
            </Box>
        </Box>

    )
}

export default DynamicCircle;