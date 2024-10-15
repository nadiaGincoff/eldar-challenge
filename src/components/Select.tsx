import { Theme, useTheme } from '@mui/material/styles';

import { OutlinedInput, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Item {
  id: number;
  name: string;
}

interface SelectComponentProps {
  items: Item[] | undefined;
  label: string;
  selectedItem: number;
  handleSelectChange: (event: SelectChangeEvent<number>) => void;
}

export default function SelectComponent({ items, selectedItem, label, handleSelectChange }: SelectComponentProps) {
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ width: '100%' }}>
        <InputLabel id="input-label">{label}</InputLabel>
        <Select
          fullWidth
          labelId="input-label"
          id="input-select"
          value={selectedItem}
          onChange={handleSelectChange}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
        >
          {items?.length ? items?.map((item: Item) => (
            <MenuItem
              key={item.id}
              value={item.id}
              style={{
                fontWeight: selectedItem === item.id 
                  ? theme.typography.fontWeightMedium 
                  : theme.typography.fontWeightRegular
              }}
              divider
            >
              {item.name}
            </MenuItem>
          ))  : <MenuItem>No hay usuarios</MenuItem>}
        </Select>
      </FormControl>
    </div>
  );
}