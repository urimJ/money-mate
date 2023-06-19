import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const SelectVariantG = ({ handleGChange }) => {
  const [g1, setg1] = React.useState('');

  const handleChange = (event) =>{
    const selectedValue = event.target.value;
    setg1(selectedValue);
    handleGChange(selectedValue);
    console.log(selectedValue);
  };

  const { themeMode, setThemeMode, category, setCategory } =
  useContext(Context);

  const categoryList = category?.map((c, idx) => {
    return (
      <MenuItem value={c.category} key={idx}>{c.category}</MenuItem>
      // <MenuItem value={'b'}>교통비</MenuItem>
      // <MenuItem value={'c'}>문화여가비</MenuItem>
      // <MenuItem value={'d'}>유흥비</MenuItem>
      // <MenuItem value={'e'}>교육비</MenuItem>
    );
  });  

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
          {categoryList}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectVariantG