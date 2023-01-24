import React from 'react';
import {createTheme} from "@mui/material";

const Theme = createTheme ({
        palette: {
            primary: {
                main: "#a96662"
            },
            secondary: {
                main: "#424275"
            }
        },
    typography: {
        allVariants: {
            color: "#ece5e5"
        },
    },
    });
export default Theme;