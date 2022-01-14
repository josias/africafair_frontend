import { cloneElement, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@mui/material';

// project imports
import Logo from 'ui-component/Logo';

// assets
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import MenuIcon from '@mui/icons-material/Menu';

function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });
    const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

    return cloneElement(children, {
        elevation: trigger ? 2 : 0,
        style: {
            backgroundColor: theme.palette.background.default,
            borderBottom: trigger ? 'none' : '1px solid',
            borderColor: trigger ? '' : darkBorder,
            color: theme.palette.text.dark
        }
    });
}

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = useState(false);
    /** Method called on multiple components with different event types */
    const drawerToggler = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar>
                <Container>
                    <Toolbar>
                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            <Logo />
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
                            <Button color="inherit" component={RouterLink} to="/" target="_self">
                                About
                            </Button>
                            <Button color="inherit" component={RouterLink} to="login" target="_self">
                                My Fair
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/visitfair" target="_self">
                                Visit Fair
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/register"
                                disableElevation
                                variant="contained"
                                color="secondary"
                            >
                                Register on Fair
                            </Button>
                        </Stack>
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                <Box
                                    sx={{
                                        width: 'auto'
                                    }}
                                    role="presentation"
                                    onClick={drawerToggler(false)}
                                    onKeyDown={drawerToggler(false)}
                                >
                                    <List>
                                        <Link style={{ textDecoration: 'none' }} href="#" target="_blank">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <IconHome2 />
                                                </ListItemIcon>
                                                <ListItemText primary="About" />
                                            </ListItemButton>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} href="/login" target="_blank">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <IconDashboard />
                                                </ListItemIcon>
                                                <ListItemText primary="My Fair" />
                                            </ListItemButton>
                                        </Link>
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            href="/visitfair"
                                            target="_blank"
                                        >
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <IconBook />
                                                </ListItemIcon>
                                                <ListItemText primary="Visit Fair" />
                                            </ListItemButton>
                                        </Link>
                                        <Link
                                            style={{ textDecoration: 'none' }}
                                            href="/register"
                                            target="_blank"
                                        >
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <IconCreditCard />
                                                </ListItemIcon>
                                                <ListItemText primary="Register" />
                                            </ListItemButton>
                                        </Link>
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
