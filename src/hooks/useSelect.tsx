import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

export const useSelect = () => {
  const [selectedItem, setSelectedItem] = useState<number>(1);

  const handleSelectChange = (event: SelectChangeEvent<number>) => {
    const { value } = event.target;
    setSelectedItem(value as number);
  };

  return { selectedItem, setSelectedItem, handleSelectChange };
};