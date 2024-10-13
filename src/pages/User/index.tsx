import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import { useAuth } from "../../contexts/useAuth";
import { Outlet } from "react-router-dom";

const UserPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="md">
      <Outlet />
    </Container>
  )
}

export default UserPage;