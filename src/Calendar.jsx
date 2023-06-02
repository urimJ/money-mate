import { useState } from 'react';
import {
  PageContainer,
  CalendarSection,
  Title,
} from './components/CalendarStyle';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './components/calendarStyle.css';


const Calendar = () => {
  
  const userName = localStorage.getItem('username');

  return (
    <>
    <PageContainer>
      <CalendarSection>
        <Title>{userName}님의 가계부</Title>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={[
            { title: '웹프 기말고사', date: '2023-06-08' },
            { title: '웹프 프로젝트 제출', date: '2023-06-15' }
          ]}  
          contentHeight={400}
        />
      </CalendarSection>
    </PageContainer>
    </>
  );
};

export default Calendar;