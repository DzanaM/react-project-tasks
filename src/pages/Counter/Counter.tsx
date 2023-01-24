import React, {useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import styles from "../../config/Styles.module.css";

const Counter = () => {

    const [count, setCount] = useState(0);


    return (
        <Box className={styles.display}>
            <Typography variant="h3" align="center"> Counter </Typography>
            <Button variant="contained" sx={{m: 2}} onClick={() => setCount(count + 1)}><PlusOneIcon/></Button>
            <Button variant="contained" sx={{m: 2}} onClick={() => setCount(count - 1)}><RemoveIcon/></Button>
            <Button variant="contained" sx={{m: 2}} onClick={() => setCount(0)}><RestartAltIcon/></Button>
            <Box>
                <Typography variant="h3" align="center"> {count}  </Typography>
            </Box>
        </Box>
    );
}


export default Counter;