import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate} from "react-router-dom";
import AuthContext from "../../context/auth-context";
import {IconButton, Menu} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export default function Navigation() {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const {isLoggedIn, onLogout} = useContext(AuthContext)

    const navigate = useNavigate();
    const itemsList = [

        {
            text: "COUNTER",
            onClick: () => navigate("/counter"),
            protected: true

        },
        {
            text: "TABS",
            onClick: () => navigate("/tabs"),
            protected: true

        },
        {
            text: "DYNAMIC CIRCLE",
            onClick: () => navigate("/dynamic-circle"),
            protected: true
        },
        {
            text: "LIST ITEMS",
            onClick: () => navigate("/list-items"),
            protected: true
        },
        {
            text: "PERIMETER AND AREA",
            onClick: () => navigate("/perimeter-area"),
            protected: true
        },
        {
            text: "CHARACTERS COUNTER",
            onClick: () => navigate("/characters-counter"),
            protected: true
        },
    ]

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <Box>
            <Box sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}>
                <List>
                    {itemsList.map((item, index) => {
                        const {text, onClick} = item;
                        return (
                            <ListItem key={text} onClick={onClick}>
                                <ListItemButton>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>

            </Box>

            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="primary"
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: {xs: 'block', md: 'none'},
                    }}
                >
                    <List>
                        {itemsList.map((item, index) => {
                            const {text, onClick} = item;
                            return (
                                <ListItem key={text} onClick={onClick}>
                                    <ListItemButton>
                                        <ListItemText primary={text}/>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Menu>
            </Box>

        </Box>
    );
}

