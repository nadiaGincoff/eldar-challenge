import { ReactNode } from 'react';
import { Button, Box, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  icon?: ReactNode; 
  label: string;         
  onClick?: () => void;  
}

const CustomButton: React.FC<CustomButtonProps> = ({ icon, label, onClick, sx, ...rest }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button
        variant="contained"
        startIcon={icon}
        onClick={onClick}
        sx={{
          color: 'secondary.main',
          padding: '5px 20px',
          borderRadius: '50px',
          textTransform: 'none',
          fontSize: '12px',
          backgroundColor: 'text.primary',
          '&:hover': {
            backgroundColor: 'primary.main',
          },
          ...sx,
        }}
        {...rest}
      >
        {label}
      </Button>
    </Box>
  );
};

export default CustomButton;