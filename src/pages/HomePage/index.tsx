import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import { useAuth } from "../../contexts/useAuth";

const HomePage: React.FC = () => {
  const { user } = useAuth()
  console.log(user, "user")
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={1} sx={{ mt: 10, p: 4}}>
        <Typography component="h1" variant="h5" align="center">
          Home Page
        </Typography>
      </Paper>
    </Container>
  )
}

export default HomePage;