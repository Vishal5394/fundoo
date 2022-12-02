import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {connect} from 'react-redux';

const drawerWidth =270;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: 65,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 65,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

 function MiniDrawer(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const noteChoice=(Choice) =>{
        props.listenToDrawer(Choice) 
        console.log(Choice,"note choice")
        props.dispatch({
            type: `${Choice}`
        })
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={props.drawerToggle}>
                <List>
                    <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between', width: '15vw', border: '0px solid red', alignContent: 'space-between', flexDirection: 'row' }} button onClick={()=> noteChoice("Notes")}>
                        <ListItemIcon
                            sx={{
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <LightbulbOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Notes' style={{border: '0px solid red', padding:'10px'}}/>

                    </ListItem>

                    <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between', width: '15vw', border: '0px solid red', alignContent: 'space-between', flexDirection: 'row' }} button onClick={()=> noteChoice("Reminders")}>
                        <ListItemIcon
                            sx={{
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <NotificationsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Reminders' style={{border: '0px solid red', padding:'10px'}}/>

                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between', width: '15vw', border: '0px solid red', alignContent: 'space-between', flexDirection: 'row' }}  button onClick={()=> noteChoice("Edit")}>
                        <ListItemIcon
                            sx={{
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <ModeOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Edit labels' style={{border: '0px solid red', padding:'10px'}}/>

                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between', width: '15vw', border: '0px solid red', alignContent: 'space-between', flexDirection: 'row' }}  button onClick={()=> noteChoice("Archive")}>
                        <ListItemIcon
                            sx={{
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <ArchiveOutlinedIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Archive' style={{border: '0px solid red', padding:'10px'}}/>

                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'flex', justifyContent: 'space-between', width: '15vw', border: '0px solid red', alignContent: 'space-between', flexDirection: 'row' }}  button onClick={()=> noteChoice("Trash")}>
                        <ListItemIcon
                            sx={{
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <DeleteOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary='Trash' style={{border: '0px solid red', padding:'10px'}}/>

                    </ListItem>
                </List>
               
            </Drawer>
        </Box>
    );
}

export default connect()(MiniDrawer)