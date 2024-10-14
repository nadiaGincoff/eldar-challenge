import { List, ListItemButton, ListItemIcon, ListItemText, Box, Drawer } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { useDrawer } from '../contexts/useDrawer';

const DrawerContent = () => {
  const navigate = useNavigate();

  const handleListItemClick = (text: string) => {
    if (text === 'Posts') {
      navigate('/admin');
    } else {
      navigate(`/admin/${text.toLowerCase()}`);
    }
  }

  return (
    <List sx={{ mt: 25 }}>
      {['Posts', 'Users', 'Settings'].map((text, index) => (
        <ListItemButton divider key={text} onClick={() => handleListItemClick(text)}>
          <ListItemIcon sx={{ color: 'text.primary' }}>
            {index === 0 ? <ArticleIcon /> :
              index === 1 ? <PeopleIcon /> :
                index === 2 ? <DashboardIcon /> :
                  <SettingsIcon />}
          </ListItemIcon>
          <ListItemText primary={text} sx={{ color: 'text.primary' }} />
        </ListItemButton>
      ))}
    </List>
  );
}

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