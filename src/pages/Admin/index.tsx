import {
  Box,
} from '@mui/material';

import { Outlet } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <Box sx={{ 
      p: 3, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'column', 
      width: '100%' 
    }}>
      <Outlet />
    </Box>
  )
}
