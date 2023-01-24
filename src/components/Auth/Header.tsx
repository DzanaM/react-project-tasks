import * as React from 'react';
import {useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AuthContext from "../../context/auth-context";
import {useNavigate} from "react-router-dom";
import HiveIcon from '@mui/icons-material/Hive';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


function ResponsiveAppBar() {
    const navigate = useNavigate();
    const {isLoggedIn, onLogout} = useContext(AuthContext);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">

            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HiveIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
                    {isLoggedIn && <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/home"

                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TASKS
                    </Typography>}

                    <HiveIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/home"
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        TASKS
                    </Typography>

                    {/*This box is here to put user image on the right corner*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>


                    <Box sx={{flexGrow: 0}}>
                        {isLoggedIn &&
                            <Tooltip title="Logout">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
                        }
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <Button onClick={() => {
                                onLogout()
                            }} sx={{p: 0}}>
                                <PowerSettingsNewIcon/>
                            </Button>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;

