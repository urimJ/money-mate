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
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

const Calendar = () => {
  
  const navigate = useNavigate();
  const userName = localStorage.getItem('username');
  const schedule = JSON.parse(localStorage.getItem('schedule'));

  function Schedule({schedule}){
    return (
      schedule.date==date? <div>{schedule.date} {schedule.title} </div> : <div></div>
    );
  }
  
  const [isInputModalOpen,setIsInputModalOpen]=useState(false);
  const openInputModal=()=>setIsInputModalOpen(true);
  const closeInputModal=()=>setIsInputModalOpen(false);

  const [isScheduleModalOpen,setIsScheduleModalOpen]=useState(false);
  const openScheduleModal=()=>{
    setIsScheduleModalOpen(true);
    // setDate(e.target.value);  // ?? 날짜가 찍혀야할텐데 뭐가 찍힐까
  }
  const closeScheduleModal=()=>setIsScheduleModalOpen(false);

  const [isModifyModalOpen,setIsModifyModalOpen]=useState(false);
  const openModifyModal=()=>setIsModifyModalOpen(true);
  const closeModifyModal=()=>setIsModifyModalOpen(false);

  const [content,setContent]=useState('');
  const [date,setDate]=useState('');
  const [list,setList]=useState([
    { title: '웹프 기말고사', date: '2023-06-08' },
    { title: '웹프 프로젝트 제출', date: '2023-06-15' },
  ]);

  const dateChange=(e)=>{
    setDate(e.target.value);
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
    closeInputModal();
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
          plugins={[ dayGridPlugin, interactionPlugin ]}
          // headerToolbar={{
          //   left: 'prev,next today',
          //   center: 'title',
          //   right: 'dayGridMonth,timeGridWeek,timeGridDay'
          // }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          events={list}
          contentHeight={400}
          eventClick={openScheduleModal}
        />
        <Modal 
          isOpen={isScheduleModalOpen} 
          onRequestClose={closeScheduleModal}
          style={ModalStyle}
          ariaHideApp={false}
          >
          <h1>일정 리스트</h1>
          <ModalForm>
            <div>{schedule?.map((sche,idx)=>(<Schedule key={idx} schedule={sche}/>))}</div>
            {/* 일정을 클릭하면 textfield와 수정, 삭제 버튼이 뜨도록 하기  */}
            <ModalButton onClick={closeScheduleModal}>닫기</ModalButton>
          </ModalForm>
        </Modal>
        <Modal>
            <TextField
              label="변경할 일정을 입력해주세요."
              variant="outlined"
              color="info"
              type="schedule"
              required
              onChange={contentChange}
              sx={{ width: '200px' }}
              ></TextField>
            <ModalButton type="submit">수정</ModalButton>
            <ModalButton type="submit">삭제</ModalButton>
            <ModalButton onClick={closeModifyModal}>닫기</ModalButton>
        </Modal>
        <CalendarButton onClick={openInputModal}>일정추가</CalendarButton>
        <Modal 
          isOpen={isInputModalOpen} 
          onRequestClose={closeInputModal}
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
            <ModalButton onClick={closeInputModal}>닫기</ModalButton>
          </ModalForm>
        </Modal>
      </CalendarSection>
    </PageContainer>
    </>
  );
};

export default Calendar;