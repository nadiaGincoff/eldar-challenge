import React from "react";
import { Container, Card, Typography } from "@mui/material";
import LoginForm from "./LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Container 
      component="main" 
      maxWidth="md" 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '90vh'
    }}>
      <Card elevation={0} sx={{ p: 4, borderRadius: '15px', mt: 10 }}>
        <Typography component="h1" variant="h5" align="center" sx={{ fontWeight: 900 }}>
          Iniciar sesión
        </Typography>
        <Typography component="h3" variant="subtitle2" align="center" sx={{ mt: 2}}>
          Ingresa tus credenciales para acceder a tu cuenta
        </Typography>
        <LoginForm />
      </Card>
    </Container>
  )
}

export default LoginPage;