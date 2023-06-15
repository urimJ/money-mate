import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const DatePickers = () => {

  //const [date, setDate] = useState();
  //const dateFormat = dayjs(date).format("YYYY-MM-DD");

  return (
    <LocalizationProvider  
    dateAdapter={AdapterDayjs}
    // localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <DatePicker 
        format="YYYY - MM - DD" 
        // value = {date}
        // onChange={(newValue) => setDate(newValue)}
      />
    </LocalizationProvider>
  );
};

export default DatePickers