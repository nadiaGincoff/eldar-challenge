import React from 'react';
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'background.paper' }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={"./assets/eldar-logo.png"} alt="Logo" style={{ height: 40, marginRight: 10 }} />
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
        {children}
      </Container>
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'background.paper' }}>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Nadia Gincoff
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;