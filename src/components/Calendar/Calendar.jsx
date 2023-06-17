import { useState, useEffect } from 'react';
import {
  PageContainer,
  Title,
  CalendarButton,
  CalendarContainer,
  ModalStyle,
  ModalForm,
  ModalButton,
} from '../CalendarStyle';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '../calendarStyle.css';
import Modal from 'react-modal';
import { TextField } from '@mui/material';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import dayjs from 'dayjs';

const Calendar = () => {
  const userName = localStorage.getItem('username');
  const schedule = JSON.parse(localStorage.getItem('schedule'));
  const [list, setList] = useState([]);
  const [eventList, setEventList] = useState([]);

  // useEffect--------------------------------------------------------------------------------------------
  useEffect(() => {
    setList(schedule);
    setEventList((prevList) => prevList.concat(schedule));
  }, []);

  useEffect(() => {
    localStorage.setItem('schedule', JSON.stringify(list));
  }, [list]);

  // 모달에서 리스트 입력 관련 함수------------------------------------------------------------
  const [isInputModalOpen, setIsInputModalOpen] = useState(false);
  const openInputModal = () => setIsInputModalOpen(true);
  const closeInputModal = () => setIsInputModalOpen(false);

  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const dateChange = (e) => {
    setDate(e.target.value);
  };

  const contentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (list == null) {
      setList([{ title: content, date: date }]);
    } else {
      setList([...list, { title: content, date: date }]);
    }
    setEventList([...eventList, { title: content, date: date }]);
    closeInputModal();
  };

  return (
    <>
      <PageContainer>
        <Title>{userName}님의 가계부</Title>
        <CalendarContainer>
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            events={eventList}
            contentHeight={630}
          />
        </CalendarContainer>

        <CalendarButton onClick={openInputModal}>일정추가</CalendarButton>
        <Modal
          isOpen={isInputModalOpen}
          onRequestClose={closeInputModal}
          style={ModalStyle}
          ariaHideApp={false}
        >
          <h1>일정 추가</h1>
          <ModalForm onSubmit={handleSubmit}>
            <TextField type="date" onChange={dateChange}></TextField>
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
      </PageContainer>
    </>
  );
};

export default Calendar;
