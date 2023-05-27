import Typewriter from 'typewriter-effect';
import {
  GuideContainer,
  GuideContent,
  GuideHeader,
} from './components/GuideStyle';

const Guide = () => {
  const userName = localStorage.getItem('username');
  return (
    <>
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
        <GuideContent></GuideContent>
      </GuideContainer>
    </>
  );
};

export default Guide;
