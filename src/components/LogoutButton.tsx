import { useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAuth } from '../contexts/AuthProvider';
import CustomButton from './CustomButton';
import AlertDialog from './AlertDialog';

const LogoutButton = () => {
  const { logout } = useAuth(); 
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    return logout()
  };

  return (
    <>
      <CustomButton 
        icon={<LogoutIcon />} 
        label="Logout"
        onClick={() => setOpen(true)} 
        sx={{ marginRight: 2 }}
      />
      <AlertDialog 
        open={open}
        handleClose={() => setOpen(false)}
        confirmButtonAction={handleLogout}
        title="¿Estás seguro de que deseas cerrar sesión?"
        description="Esta acción no se puede deshacer."
        cancelButtonText="Cancelar"
        confirmButtonText="Cerrar sesión"
      />
    </>
    
  );
};

export default LogoutButton;