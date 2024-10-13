import React from 'react';
import { Box, AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material';
import LogoutButton from './LogoutButton';
import DrawerMenu from './Drawer';
import {
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/useAuth';
import { useDrawer } from '../hooks/useDrawer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isLoggedIn, isAdmin } = useAuth();
  const { mobileOpen, handleDrawerToggle, drawerWidth } = useDrawer();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header isLoggedIn={isLoggedIn} isAdmin={isAdmin} handleDrawerToggle={handleDrawerToggle} />
      {isLoggedIn() && isAdmin ? 
        <DrawerMenu 
          drawerWidth={drawerWidth} 
          mobileOpen={mobileOpen} 
          handleDrawerToggle={handleDrawerToggle} 
        /> 
      : null }
      <Container 
        component="main" 
        sx={{ 
          width: { sm: `calc(100% - ${drawerWidth}px)` }, 
          ml: { sm: `${drawerWidth}px` }, 
          mt: 0, 
          mb: 0, 
          padding: 0, 
          flexGrow: 3 
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;

const Header = ({ isLoggedIn, isAdmin, handleDrawerToggle }: { isLoggedIn: () => boolean, isAdmin: boolean, handleDrawerToggle: () => void }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar>
        {isLoggedIn() && isAdmin ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={"../assets/eldar-logo.png"} alt="Logo" style={{ height: 40, marginRight: 10 }} />
        </Box>
      </Toolbar>
      {isLoggedIn() ? <LogoutButton /> : null}
    </AppBar>
  );
}

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Nadia Gincoff
      </Typography>
    </Box>
  )
}