import React, { useState} from 'react';
import { TextField, Button, Box, Typography } from "@mui/material";
import { useAuth } from '../contexts/useAuth';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {loginUser} = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Por favor, complete todos los campos.');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    return loginUser(username, password)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt:1 }}>
      <TextField 
        margin="normal"
        required
        fullWidth
        id="username"
        label="Nombre de usuario"
        name="username"
        autoComplete="username"
        autoFocus
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField 
        margin="normal"
        required
        fullWidth
        id="password"
        label="Contraseña"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error ? (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      ) : null}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ 
          mt: 3, 
          mb: 3, 
          backgroundColor: 'black', 
          color: 'white'
        }}
      >
        Iniciar sesión
      </Button>
    </Box>
  )
}

export default LoginForm;