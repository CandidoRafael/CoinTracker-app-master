import { useNavigate } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import SavingsIcon from '@mui/icons-material/Savings';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import	{ useAppStore } from '../../../store'
import { userLogOut } from '../../../auth/userLogOut';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
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

export const SideBar = () => {
  const theme = useTheme();
  const { logOut } = userLogOut()

  const updateOpen  = useAppStore((state) => state.updateOpen) 
  const open  = useAppStore((state) => state.dopen) 

  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <Box height={30}/>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate(`/dashboard`)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              > 
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: '#3c995e',
                    borderRadius: 5,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center'}}
                >
                   <HomeIcon />
                    
                </ListItemIcon>
              
                <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Home" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate(`/dashboard/finances`)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                
                }}
              > 
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: '#3c995e',
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center', }}
                >
                    <SavingsIcon />

                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Finanças" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate(`/dashboard/goals`)} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
             
                }}
              > 
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: '#3c995e',
                    borderRadius: 5,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center', }}
                >
                  
                  <EmojiEventsIcon />

                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Metas" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate(`/dashboard/currency`)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              > 
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: '#3c995e',
                    borderRadius: 5,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center', }}
                >
                  <PriceChangeIcon />
                    
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Conversor de Moedas" style={{fontWeight: 'bold'}}/>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ display: 'block', paddingTop: '1em' }}>
              <ListItemButton
              onClick={() => logOut()}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  // backgroundColor: "red"
                }}
              > 
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: '#3c995e',
                    borderRadius: 5,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center', }}
                >
                    <LogoutIcon />

                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }} primary="Sair" />
              </ListItemButton>
            </ListItem>

        </List>

      </Drawer>
    
    </Box>
  );
};
