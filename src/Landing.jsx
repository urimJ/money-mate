import { TextField, ThemeProvider, createTheme } from '@mui/material';
import {
  LandingContainer,
  LandingForm,
  LandingInputButton,
  LandingSection,
  LandingTitle,
} from './components/LandingStyle';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Context } from './context/Context';
import Header from './components/Layout/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff', // 흰색
    },
    secondary: {
      main: '#4178CB', // 파란색
    },
  },
});

const Landing = () => {
  // State 관리-------------------------------------------
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const { isLoggedIn, setIsLoggedIn, themeMode } = useContext(Context);

  // ComponentDidMount------------------------------------
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/guide', { replace: true });
    }
  }, [isLoggedIn]);

  // Function---------------------------------------------
  const handleChange = (e) => setUserName(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', userName);
    setIsLoggedIn(true);
    navigate('/guide', { replace: true });
  };

  return (
    <>
      <Header />
      <LandingContainer className="fadeIn">
        <LandingSection>
          <LandingTitle>
            종합 가계부,{' '}
            <span style={{ fontFamily: 'Kaushan Script' }}>Money mate</span> 에
            오신 것을 환영합니다.
          </LandingTitle>
          <LandingForm onSubmit={handleSubmit}>
            <ThemeProvider theme={theme}>
              <TextField
                label="이름을 입력해주세요."
                variant="outlined"
                name="username"
                type="name"
                autoFocus
                required
                onChange={handleChange}
                sx={{
                  width: '440px',
                  backgroundColor: 'transparent',
                  borderRadius: '10px',
                  border: themeMode ? '1px solid #fff' : '1px solid #4178CB',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none', // fieldset border 없애기
                    },
                    '&:hover fieldset': {
                      border: 'none', // hover 시 fieldset border 없애기
                    },
                    '& input': {
                      color: themeMode ? '#fff' : '#4178CB', // 입력하는 글자의 색상 설정
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: themeMode ? '#fff' : '#4178CB',
                  },
                }}
              />
            </ThemeProvider>
            <LandingInputButton>등록</LandingInputButton>
          </LandingForm>
        </LandingSection>
      </LandingContainer>
    </>
  );
};

export default Landing;
