import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const UserPage: React.FC = () => {
  return (
    <Container component="main" sx={{
      mt: {
        xs: 10,
        sm: 15,
        md: 25,
      }}}
    >
      <Outlet />
    </Container>
  )
}

export default UserPage;