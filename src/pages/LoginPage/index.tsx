import React from "react";
import { Container, Card, Typography } from "@mui/material";
import LoginForm from "../../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Card elevation={7} sx={{ mt: 10, p: 4 }}>
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