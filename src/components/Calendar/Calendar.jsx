import { useState, useEffect } from 'react';
import {
  PageContainer,
  Title,
  CalendarButton,
  CalendarContainer,
  ModalStyle,
  ModalForm,
  SubmitButton,
  CloseButton,
  ModalTitle,
  ModalList,
  ModalListItem,
  DeleteButton,
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
    setEventList((prev) => prev.concat(schedule));
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

  const submitSchedule = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    setList([...list, { title: content, date: date }]);
    setEventList([...eventList, { title: content, date: date }]);
    closeInputModal();
  };

  // 모달에서 리스트 삭제 관련 함수------------------------------------------------------------
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const openScheduleModal = (e) => {
    setIsScheduleModalOpen(true);
    const clickedDate = dayjs(e.event.start).format('YYYY-MM-DD');
    setDate(clickedDate);
  };
  const closeScheduleModal = () => setIsScheduleModalOpen(false);

  function Schedule({ schedule }) {
    return schedule.date == date ? (
      <ModalListItem>
        <span>{schedule.title} &nbsp;&nbsp;&nbsp;&nbsp;</span>
        <DeleteButton onClick={() => deleteSchedule(schedule)}>
          삭제
        </DeleteButton>
      </ModalListItem>
    ) : (
      <div></div>
    );
  }

  const deleteSchedule = (sche) => {
    const newEvent = eventList.filter((el) => {
      return el.date != sche.date || el.title != sche.title;
    });
    setEventList(newEvent);
    const newSchedule = list.filter((el) => {
      return el.date != sche.date || el.title != sche.title;
    });
    setList(newSchedule);
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
            aspectRatio={5}
            eventClick={openScheduleModal}
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
          <ModalForm onSubmit={submitSchedule}>
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
            <SubmitButton type="submit">추가</SubmitButton>
          </ModalForm>
          <CloseButton onClick={closeInputModal}>닫기</CloseButton>
        </Modal>

        <Modal
          isOpen={isScheduleModalOpen}
          onRequestClose={closeScheduleModal}
          style={ModalStyle}
          ariaHideApp={false}
        >
          <ModalTitle>{date} &nbsp;일정 리스트</ModalTitle>
          <ModalForm>
            <ModalList>
              {list?.map((sche, idx) => (
                <Schedule key={idx} schedule={sche} />
              ))}
            </ModalList>
            <CloseButton onClick={closeScheduleModal}>닫기</CloseButton>
          </ModalForm>
        </Modal>
      </PageContainer>
    </>
  );
};

export default Calendar;
