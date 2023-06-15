import { useState } from 'react';
import {
  PageContainer,
  CalendarSection,
  Title,
  CalendarButton,
  ModalStyle,
  ModalForm,
  ModalButton,
} from './components/CalendarStyle';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Modal from 'react-modal';
import { TextField } from '@mui/material';

const Calendar = () => {
  const userName = localStorage.getItem('username');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <PageContainer>
        <CalendarSection>
          <Title>{userName}님의 가계부</Title>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
              { title: '웹프 기말고사', date: '2023-06-08' },
              { title: '웹프 프로젝트 제출', date: '2023-06-15' },
            ]}
            contentHeight={400}
          />
          <CalendarButton onClick={openModal}>일정추가</CalendarButton>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={ModalStyle}
          >
            <h1>일정 추가</h1>
            <ModalForm>
              <TextField type="date"></TextField>
              <TextField
                label="일정을 입력해주세요."
                variant="outlined"
                color="info"
                name="user_schedule"
                type="schedule"
                required
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
