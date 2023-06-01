import Typewriter from 'typewriter-effect';
import {
  GuideContainer,
  GuideContent,
  GuideHeader,
  GuideNextButton,
} from './components/GuideStyle';
import { useNavigate } from 'react-router-dom';
import Header from './components/Layout/Header';

const Guide = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem('username');
  const handleClick = () => navigate(`/accounts/${userName}`);
  return (
    <>
      <Header />
      <GuideContainer>
        <GuideHeader>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`안녕하세요, ${userName}님. <br/>`)
                .pauseFor(1000)
                .typeString(
                  'Money Mate는 사용자의 지출, 소비를 기록할 수 있는 서비스를 제공합니다.'
                )
                .pauseFor(500)
                .start();
            }}
          />
          {/* 안녕하세요, {userName}님 <br />
          Money Mate는 사용자의 지출, 소비를 기록할 수 있는 서비스를 제공합니다. */}
        </GuideHeader>
        <br />
        <GuideContent>Content</GuideContent>
        <br />
        <GuideNextButton onClick={handleClick}>다음</GuideNextButton>
      </GuideContainer>
    </>
  );
};

export default Guide;
