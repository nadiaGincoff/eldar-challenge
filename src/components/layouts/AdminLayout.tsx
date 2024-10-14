import { Container } from "@mui/material";
import { useDrawer } from "../../contexts/useDrawer";
import DrawerMenu from "../Drawer";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DrawerMenu /> 
      <Container 
        component="main"
      >
        {children}
      </Container>
    </>
  )
}

export default AdminLayout;