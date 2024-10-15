import { Box, Typography, AppBar, Toolbar, IconButton } from "@mui/material";
import LogoutButton from '../LogoutButton';
import {  
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthProvider';
import { useDrawer } from '../../contexts/DrawerProvider';
import { useLocation } from 'react-router-dom';
import CustomButton from "../CustomButton";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isLoggedIn, isAdmin } = useAuth();
  const { handleDrawerToggle } = useDrawer();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  return (
    <AppBar
      elevation={0}
      position="fixed"
      sx={(theme) => ({ 
        paddingY: 1,
        backgroundColor: 'secondary.main',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: `1px solid ${theme.palette.text.primary}`,
      })}  
    >
      <Toolbar>
        {isLoggedIn() && isAdmin ? (
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={() => handleDrawerToggle()}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: 'text.primary', 
            justifyContent: 'center', 
            paddingX: 1, 
            paddingY: 1,
            borderRadius: 50,
            cursor: 'pointer'
          }}
        >
          <img src={"../assets/eldar-logo.webp"} alt="Logo" style={{ height: 20, width: 'auto' }} />
        </Box>
      </Toolbar>
      {isLoggedIn() ? <LogoutButton /> : null}
      {isHome ? <CustomButton onClick={() => {navigate('/login')}} label="Comenzar a leer" sx={{ marginRight: 2 }} /> : null}
    </AppBar>
  );
}

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto' }}>
      <Typography variant="body2" color="text.primary" align="center">
        © {new Date().getFullYear()} Nadia Gincoff
      </Typography>
    </Box>
  )
}

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ 
      backgroundColor: 'background.default',
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
    }}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;


