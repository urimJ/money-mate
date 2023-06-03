import { useState, useEffect } from 'react';
import {
  PageContainer,
  CalendarSection,
  Title,
  CalendarButton,
  ModalStyle,
  ModalForm,
  ModalButton
} from './components/CalendarStyle';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './calendarStyle.css';
import Modal from 'react-modal';
import { TextField } from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Calendar = () => {
  
  const navigate = useNavigate();
  const userName = localStorage.getItem('username');
  
  const [isModalOpen,setIsModalOpen]=useState(false);
  const openModal=()=>setIsModalOpen(true);
  const closeModal=()=>setIsModalOpen(false);

  const [content,setContent]=useState('');
  const [date,setDate]=useState('');
  const [list,setList]=useState([
    { title: '웹프 기말고사', date: '2023-06-08' },
    { title: '웹프 프로젝트 제출', date: '2023-06-15' },
  ]);

  const dateChange=(e)=>{
    setDate(e.target.value)
  };

  const contentChange=(e)=>{
    setContent(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    setList([
      ...list,
      {title:content,date:date}
    ])
    closeModal();
    navigate('/calendar',{replace:true});
  }

  useEffect(()=>{
    localStorage.setItem('schedule',JSON.stringify(list));
  },[list]);

  return (
    <>
    <PageContainer>
      <CalendarSection>
        <Title>{userName}님의 가계부</Title>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
          events={list}
          contentHeight={400}
        />
        <CalendarButton onClick={openModal}>일정추가</CalendarButton>
        <Modal 
          isOpen={isModalOpen} 
          onRequestClose={closeModal}
          style={ModalStyle}
          ariaHideApp={false}
          >
          <h1>일정 추가</h1>
          <ModalForm onSubmit={handleSubmit}>
            <TextField
              type="date"
              onChange={dateChange}>
            </TextField>
            <TextField
              label="일정을 입력해주세요."
              variant="outlined"
              color="info"
              type="schedule"
              required
              onChange={contentChange}
              sx={{ width: '200px' }}
              ></TextField>
            <ModalButton type="submit">추가</ModalButton>
            <ModalButton onClick={closeModal}>닫기</ModalButton>
          </ModalForm>
        </Modal>
      </CalendarSection>
    </PageContainer>
    </>
  );
};

export default Calendar;