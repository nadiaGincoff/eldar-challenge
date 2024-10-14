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
          textAlign: 'left',
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{  fontWeight: 'bold', mb: 2 }}
        >
          Historias e ideas
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mb: 4, sm: { fontSize: '20px' }, fontSize: '20px' }}
        >
          Un lugar para leer, escribir, y profundizar tu comprensión
        </Typography>
        <CustomButton
          label="Comenzar a leer"
          variant="contained"
          onClick={() => navigate('/login')}
          sx={{
            bgcolor: 'primary.main',
          }}
        />
      </Container>
    </Box>
  );
}

export default Home;