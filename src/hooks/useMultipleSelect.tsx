import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";

export const useMultipleSelect = () => {
  const [selectedItem, setSelectedItem] = useState<string[]>([]);

  const handleSelectChange = (event: SelectChangeEvent<typeof selectedItem>) => {
    const {
      target: { value },
    } = event;
    setSelectedItem(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return { selectedItem, setSelectedItem, handleSelectChange }
}