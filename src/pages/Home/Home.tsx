import React, {useContext} from 'react';

import AuthContext from '../../context/auth-context';
import {Button, Typography} from "@mui/material";
import {Box} from "@mui/system";
import styles from "../../config/Styles.module.css";

const Home = () => {
    const authCtx = useContext(AuthContext);

    return (
        <>
            <Box sx={{display: {xs: 'none', md: 'flex'}}} className={styles.display}>
                <Typography m={3} variant="h3" align="center">Welcome back!</Typography>
                <Button variant="contained" onClick={authCtx.onLogout}>Logout</Button>
            </Box>

            <Box sx={{display: {xs: 'flex', md: 'none'}}} mt={5}>
                <Typography m={3} variant="h3" align="center">Welcome back!</Typography>
            </Box>
        </>
    );
};

export default Home;
