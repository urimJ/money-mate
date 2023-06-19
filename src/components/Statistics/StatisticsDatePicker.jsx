import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'GmarketSansTTFLight',
    fontSize: '10px',
  },
});


const StatisticsDatePickers = ({ date, onDateChange }) => {
  const handleDateChange = (newValue) => {
    onDateChange(newValue); // 선택한 날짜를 상위 컴포넌트로 전달
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        // localeText={koKR.components.MuiLocalizationProvider.defaultProps.localeText}
      >
        <DatePicker
          format="YYYY - MM - DD"
          value={date}
          onChange={handleDateChange}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default StatisticsDatePickers;
