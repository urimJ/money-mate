import { TextField } from '@mui/material';
import {
  LandingContainer,
  LandingForm,
  LandingInputButton,
  LandingSection,
  LandingTitle,
} from './components/LandingStyle';
// import Typewriter from 'typewriter-effect';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Landing = () => {
  // State 관리-------------------------------------------
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const auth = localStorage.getItem('username');

  // ComponentDidMount------------------------------------
  useEffect(() => {
    if (auth) {
      navigate('/guide', { replace: true });
    }
  }, []);

  // Function---------------------------------------------
  const handleChange = (e) => setUserName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', userName);
    navigate('/guide', { replace: true });
  };

  return (
    <>
      <LandingContainer className="fadeIn">
        <LandingSection>
          <LandingTitle>
            종합 가계부,{' '}
            <span style={{ fontFamily: 'Kaushan Script' }}>Money mate</span> 에
            오신 것을 환영합니다.
          </LandingTitle>
          <LandingForm onSubmit={handleSubmit}>
            <TextField
              label="이름을 입력해주세요."
              variant="outlined"
              color="info"
              name="username"
              type="name"
              onChange={handleChange}
              sx={{ width: '440px' }}
            />
            <LandingInputButton>등록</LandingInputButton>
          </LandingForm>
        </LandingSection>
      </LandingContainer>
    </>
  );
};

export default Landing;
