import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const DatePickers = ({ onDateChange }) => {

  const [date, setDate] = useState();
  const handleDateChange = (newValue) => {
    setDate(newValue);
    onDateChange(newValue); // 선택한 날짜를 상위 컴포넌트로 전달
  };
  //const dateFormat = dayjs(date).format("YYYY-MM-DD");

  return (
    <LocalizationProvider  
    dateAdapter={AdapterDayjs}
    // localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <DatePicker 
        label="날짜"
        format="YYYY - MM - DD" 
        value = {date}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  );
};

export default DatePickers