import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectVariantG2 = ({ handleG2Change }) => {
  const [g2, setg2] = React.useState('');

  const handleChange = (event) =>{
    const selectedValue = event.target.value;
    setg2(selectedValue);
    handleG2Change(selectedValue);
  };

  

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">결제수단</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={g2}
          onChange={handleChange}
          label="분류"
        >
          <MenuItem value={'a'}>신한카드</MenuItem>
          <MenuItem value={'b'}>카카오뱅크카드</MenuItem>
          <MenuItem value={'c'}>BC카드</MenuItem>
          <MenuItem value={'d'}>현대카드</MenuItem>
          <MenuItem value={'e'}>현금</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectVariantG2