import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickers = () => {
  return (
    <LocalizationProvider  
    dateAdapter={AdapterDayjs}
    // localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <DatePicker 
        format="YYYY - MM - DD" 
      />
    </LocalizationProvider>
  );
};

export default DatePickers