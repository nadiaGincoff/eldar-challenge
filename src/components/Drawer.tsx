import { List, ListItemButton, ListItemIcon, ListItemText, Box, Drawer } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const DrawerContent = () => {
  const navigate = useNavigate();

  const handleListItemClick = (text: string) => {
    navigate(`/admin/${text.toLowerCase()}`);
  }

  return (
    <List sx={{ mt: 10 }}>
      {['Posts', 'Users', 'Settings'].map((text, index) => (
        <ListItemButton divider key={text} onClick={() => handleListItemClick(text)}>
          <ListItemIcon>
            {index === 0 ? <ArticleIcon /> :
              index === 1 ? <PeopleIcon /> :
                index === 2 ? <DashboardIcon /> :
                  <SettingsIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </List>
  );
}

const DrawerMenu = ({ drawerWidth, mobileOpen, handleDrawerToggle }: { drawerWidth: number, mobileOpen: boolean, handleDrawerToggle: () => void }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, backgroundColor: "black", mt: 10 }}
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
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerContent />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        <DrawerContent />
      </Drawer>
    </Box>
  );
}

export default DrawerMenu;