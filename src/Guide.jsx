import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import {
  FirstScenebackground1,
  FirstScenebackground2,
  GoToNextSection,
  GuideContainer,
  GuideFirstScene,
  GuideHeader,
  GuideNextButton,
  GuideSecondScene,
  SecondSection1,
  SecondSection2,
  SecondSection3,
  Section1LeftBox,
  Section1RightBox,
  Section2LeftBox,
  Section2RightBox,
  Section3LeftBox,
  Section3RightBox,
} from './components/GuideStyle';
import { useNavigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faChartPie,
  faHandHoldingDollar,
  faMagnifyingGlassDollar,
  faPiggyBank,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

const Guide = () => {
  // 변수 관리---------------------------------------------
  const navigate = useNavigate();
  const userName = localStorage.getItem('username');
  // Promise setTimeOut State-----------------------------
  const [arrow, setArrow] = useState(false);
  // React fullpage ref-----------------------------------
  const containerRef = useRef();
  // InterSection Observer--------------------------------
  const [ref, inView] = useInView({
    triggerOnce: true, // 한 번만 트리거
    threshold: 0.5, // 요소가 화면의 50% 이상 보일 때 트리거
  });

  // 함수 관리---------------------------------------------
  const handleClick = () => navigate(`/accounts/${userName}`);
  const delay = () => {
    return new Promise(() => {
      setTimeout(() => {
        setArrow(true);
      }, 15000);
    });
  };

  // ComponentDidMount------------------------------------
  useEffect(() => {
    delay();
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
      <GuideContainer ref={containerRef}>
        <Header />
        <GuideFirstScene>
          <FirstScenebackground1>
            <FontAwesomeIcon icon={faPiggyBank} />
          </FirstScenebackground1>
          <FirstScenebackground2>
            <FontAwesomeIcon icon={faMagnifyingGlassDollar} />
          </FirstScenebackground2>
          <GuideHeader>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`안녕하세요, ${userName}님.<br/>`)
                  .typeString(
                    'Money Mate는 사용자의 지출, 소비를 기록할 수 있는 서비스입니다.<br/><br/>'
                  )
                  .pauseFor(500)
                  .typeString(
                    '다양한 통계 분석을 통해 더 효율적인 자산 관리를 경험해보세요!'
                  )
                  .pauseFor(500)
                  .start();
              }}
            />
            <GoToNextSection arrow={arrow}>
              Scroll
              <FontAwesomeIcon icon={faSortDown} />
            </GoToNextSection>
          </GuideHeader>
        </GuideFirstScene>
        <GuideSecondScene>
          <SecondSection1 ref={ref} inView={inView}>
            <Section1LeftBox>
              <FontAwesomeIcon icon={faHandHoldingDollar} />
            </Section1LeftBox>
            <Section1RightBox>
              수익, 지출 내역을
              <br />
              한눈에 보기 쉽게 정리할 수 있어요.
            </Section1RightBox>
          </SecondSection1>
          <SecondSection2 ref={ref} inView={inView}>
            <Section2LeftBox>
              내 자산 통계를
              <br />
              차트 라인을 통해 분석할 수 있어요.
            </Section2LeftBox>
            <Section2RightBox>
              <FontAwesomeIcon icon={faChartLine} />
            </Section2RightBox>
          </SecondSection2>
          <SecondSection3 ref={ref} inView={inView}>
            <Section3LeftBox>
              <FontAwesomeIcon icon={faChartPie} />
            </Section3LeftBox>
            <Section3RightBox>
              내 자산 통계를
              <br />
              차트 파이을 통해 분석할 수 있어요.
            </Section3RightBox>
          </SecondSection3>
        </GuideSecondScene>
      </GuideContainer>
      <GuideNextButton onClick={handleClick}>NEXT</GuideNextButton>
    </>
  );
};

export default Guide;
