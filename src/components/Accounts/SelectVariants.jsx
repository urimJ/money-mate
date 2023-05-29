import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectVariant = () => {
  const [inOut, setInOut] = React.useState('');

  const handleChange = (event) => {
    setInOut(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">분류</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={inOut}
          onChange={handleChange}
          label="분류"
        >
          <MenuItem value={'income'}>수입</MenuItem>
          <MenuItem value={'spending'}>지출</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectVariant