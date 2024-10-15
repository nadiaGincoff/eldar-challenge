import { Typography, Box,  Container } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '90vh',
        bgcolor: 'background.default',
      }}
    >
      <Container 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          color: 'text.primary',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontWeight: 'bold', 
            mb: 2,
          }}
        >
          Historias e ideas
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ 
            mb: 4, 
            sm: { fontSize: '20px' }, 
            fontSize: '20px',
          }}
        >
          Un lugar para leer, escribir, y profundizar tu comprensión
        </Typography>   
        <CustomButton
          label="Comenzar a leer"
          fullWidth
          onClick={() => navigate('/login')}
          variant="contained"
          sx={{ 
            mt: 3, 
            mb: 3, 
            color: 'secondary.main',
            padding: '8px 15px',
            fontSize: '15px',
            borderRadius: '50px',
            backgroundColor: 'text.primary',
            '&:focus': {
              backgroundColor: 'secondary.dark',
            },
          }}
        />
      </Container>
    </Box>
  );
}

export default Home;