import { Box, Typography } from "@mui/material";
import { useAuth } from "../contexts/AuthProvider";
import CustomButton from "./CustomButton";

const Error = () => {
  const { logout } = useAuth()
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="background.paper"
      >
        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            Disculpas, algo salió mal.
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Por favor, intenta nuevamente.
          </Typography>
          <CustomButton
            label="Volver a intentar"
            variant="contained"
            onClick={() => logout()}
            sx={(theme) => ({ mt: 2, px: 4, py: 1, backgroundColor: theme.palette.text.primary })}
          />
        </Box>
      </Box>
    )
}

export default Error;