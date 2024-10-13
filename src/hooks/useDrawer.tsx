import { useState } from "react";

export const useDrawer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return { mobileOpen, handleDrawerToggle, drawerWidth };
}