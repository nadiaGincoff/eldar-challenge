import { Box } from "@mui/material";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default UserLayout;