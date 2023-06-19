import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectVariantG = ({ handleGChange }) => {
  const [g1, setg1] = React.useState('');

  const handleChange = (event) =>{
    const selectedValue = event.target.value;
    setg1(selectedValue);
    handleGChange(selectedValue);
  };

  

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">항목</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={g1}
          onChange={handleChange}
          label="분류"
        >
          <MenuItem value={'a'}>식비</MenuItem>
          <MenuItem value={'b'}>교통비</MenuItem>
          <MenuItem value={'c'}>문화여가비</MenuItem>
          <MenuItem value={'d'}>유흥비</MenuItem>
          <MenuItem value={'e'}>교육비</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectVariantG