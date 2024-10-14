import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useMultipleSelect } from '../hooks/useMultipleSelect';

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


function getStyles(name: string, selectedItem: string[], theme: Theme) {
  return {
    fontWeight: selectedItem.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelect({ names, label }: { names: string[], label: string }) {
  const theme = useTheme();
  const { selectedItem, handleSelectChange } = useMultipleSelect();

  return (
    <div>
      <FormControl sx={{ width: '100%', }}>
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
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, selectedItem, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}