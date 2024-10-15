import { useNavigate } from 'react-router-dom';
import { List, ListItemButton, ListItemIcon, ListItemText, Box, Drawer } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';

import { useDrawer } from '../contexts/DrawerProvider';

const DrawerContent = () => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Posts', icon: <ArticleIcon />, path: '/admin' },
    { text: 'Users', icon: <PeopleIcon />, path: '/admin/users' },
    { text: 'Settings', icon: <DashboardIcon />, path: '/admin/settings' },
  ];

  const handleListItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <List sx={{ mt: 25 }}>
      {menuItems.map(({ text, icon, path }) => (
        <ListItemButton divider key={text} onClick={() => handleListItemClick(path)}>
          <ListItemIcon sx={{ color: 'text.primary' }}>
            {icon}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ color: 'text.primary' }} />
        </ListItemButton>
      ))}
    </List>
  );
};

const DrawerMenu = () => {
  const { mobileOpen, handleDrawerToggle, drawerWidth } = useDrawer();
  return (
    <Box
      component="nav"
      sx={{ 
        width: { sm: drawerWidth }, 
        flexShrink: { sm: 0 }, 
        mt: 10,
        backgroundColor: 'background.default',
      }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          backgroundColor: 'background.default',
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
}

export default DrawerMenu;