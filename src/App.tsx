import React, {useContext} from 'react';
import {ThemeProvider} from "@mui/material";
import theme from "./config/Theme";
import {Box} from "@mui/system";
import MyRoutes from './routes/MyRoutes';
import AuthContext from "./context/auth-context";
import Header from "./components/Auth/Header";
import Navigation from "./components/Auth/Navigation";

function App() {
    const ctx = useContext(AuthContext);

    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <Header/>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                    {ctx.isLoggedIn && <Navigation/>}
                    <MyRoutes/>
                </Box>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default App;
