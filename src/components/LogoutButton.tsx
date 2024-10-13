import { useAuth } from '../contexts/useAuth';
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const LogoutButton = () => {
  const { logout } = useAuth(); 

  const handleLogout = () => {
    return logout()
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 2 }}>
      <Button
        variant="contained"
        startIcon={<LogoutIcon />}
        sx={{
          textTransform: 'none',
          padding: '8px 15px',
          fontSize: '15px',
          borderRadius: '8px',
          backgroundColor: '#5982b1',
          '&:hover': {
            backgroundColor: '#587da7',
          },
        }}
        onClick={handleLogout}
      />
    </Box>
  );
};

export default LogoutButton;