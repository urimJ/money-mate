import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import {
  GoToNextSection,
  GuideContainer,
  GuideFirstScene,
  GuideHeader,
  GuideNextButton,
  GuideSecondScene,
} from './components/GuideStyle';
import { useNavigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const Guide = () => {
  // 변수 관리---------------------------------------------
  const navigate = useNavigate();
  const userName = localStorage.getItem('username');
  const containerRef = useRef();

  // 함수 관리---------------------------------------------
  const handleClick = () => navigate(`/accounts/${userName}`);

  // ComponentDidMount------------------------------------
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = containerRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 100vh
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          window.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: 'smooth',
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
          });
        }
      }
    };
    containerRef.current.addEventListener('wheel', handleScroll);
    return () => {
      containerRef.current?.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <GuideContainer ref={containerRef}>
        <GuideFirstScene>
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
            <GoToNextSection>
              <FontAwesomeIcon icon={faSortDown} />
            </GoToNextSection>
          </GuideHeader>
        </GuideFirstScene>
        <GuideSecondScene>Section 2</GuideSecondScene>
      </GuideContainer>
      <GuideNextButton onClick={handleClick}>다음</GuideNextButton>
    </>
  );
};

export default Guide;
