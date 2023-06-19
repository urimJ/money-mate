import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import {
  FirstScenebackground1,
  FirstScenebackground2,
  GoToNextSection,
  GuideContainer,
  GuideFirstScene,
  GuideFourthScene,
  GuideHeader,
  GuideNextButton,
  GuideSecondScene,
  GuideThirdScene,
  InfoCard1,
  InfoCard2,
  InfoCard3,
  InfoCard4,
  InfoCardSection,
  InfoHeader,
  InfoName,
  InfoProfile,
  InfoRightSection,
  InfoSubIcon,
  InfoSubText,
  InfoTeamNum,
  ProposalDescription,
  ProposalGridBox,
  ProposalGridItem1,
  ProposalGridItem2,
  ProposalGridItem3,
  ProposalGridItem4,
  ProposalHeader,
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
import Junseo from '../public/images/Junseo.jpg';
import Suryun from '../public/images/Suryun.jpg';
import Seunghun from '../public/images/Seunghun.jpg';
import Yurim from '../public/images/Yurim.jpg';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Guide = () => {
  // 변수 관리---------------------------------------------
  const navigate = useNavigate();
  const userName = localStorage.getItem('username');
  // Promise setTimeOut State-----------------------------
  const [arrow, setArrow] = useState(false);
  // React fullpage ref-----------------------------------
  const containerRef = useRef();
  // InterSection Observer--------------------------------
  const [ref2, inView2] = useInView({
    triggerOnce: true, // 한 번만 트리거
    threshold: 0.5, // 요소가 화면의 50% 이상 보일 때 트리거
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true, // 한 번만 트리거
    threshold: 0.5, // 요소가 화면의 50% 이상 보일 때 트리거
  });

  // 함수 관리---------------------------------------------
  const handleClick = () => navigate(`/accounts/${userName}`);
  const delay = () => {
    return new Promise(() => {
      setTimeout(() => {
        setArrow(true);
      }, 3000);
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
    containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll);
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
          <SecondSection1 ref={ref2} inView={inView2}>
            <Section1LeftBox>
              <FontAwesomeIcon icon={faHandHoldingDollar} />
            </Section1LeftBox>
            <Section1RightBox>
              수익, 지출 내역을
              <br />
              한눈에 보기 쉽게 정리할 수 있어요.
            </Section1RightBox>
          </SecondSection1>
          <SecondSection2 ref={ref2} inView={inView2}>
            <Section2LeftBox>
              내 자산 통계를
              <br />
              차트 라인을 통해 분석할 수 있어요.
            </Section2LeftBox>
            <Section2RightBox>
              <FontAwesomeIcon icon={faChartLine} />
            </Section2RightBox>
          </SecondSection2>
          <SecondSection3 ref={ref2} inView={inView2}>
            <Section3LeftBox>
              <FontAwesomeIcon icon={faChartPie} />
            </Section3LeftBox>
            <Section3RightBox>
              내 자산 통계를
              <br />
              차트 파이을 통해 분석할 수 있어요.
            </Section3RightBox>
          </SecondSection3>
          <GoToNextSection arrow={arrow}>
            Scroll
            <FontAwesomeIcon icon={faSortDown} />
          </GoToNextSection>
        </GuideSecondScene>
        <GuideThirdScene>
          <InfoHeader>
            <InfoTeamNum>TEAM 4</InfoTeamNum>
            Who We Are?
          </InfoHeader>
          <InfoCardSection ref={ref3} inView={inView3}>
            <InfoCard1>
              <InfoProfile profile={Junseo} />
              <InfoRightSection>
                <InfoName>오준서</InfoName>
                <br />
                <InfoSubText>
                  팀장
                  <br />
                  전공 : 융합에너지신소재공학과
                  <br />
                  학번 : 2017112636
                  <br />
                  키워드 : 여행, 사진, 책, 스포츠
                  <br />
                  TMI : 종강하고도 못 쉬는 중
                  <br />
                </InfoSubText>
                <InfoSubIcon>
                  <FontAwesomeIcon
                    icon={faGithub}
                    onClick={() => window.open('https://github.com/AsherOh')}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    onClick={() =>
                      window.open('https://www.instagram.com/way_to_focus/')
                    }
                  />
                </InfoSubIcon>
              </InfoRightSection>
            </InfoCard1>
            <InfoCard2>
              <InfoProfile profile={Suryun} />
              <InfoRightSection>
                <InfoName>박수련</InfoName>
                <br />
                <InfoSubText>
                  팀원
                  <br />
                  전공 : 정보통신공학과
                  <br />
                  학번 : 2019112132
                  <br />
                  키워드 : 셀카, 힙합, 축구
                  <br />
                  TMI : 일본여행 가서 코딩 중
                  <br />
                </InfoSubText>
                <InfoSubIcon>
                  <FontAwesomeIcon
                    icon={faGithub}
                    onClick={() => window.open('https://github.com/tnfus916')}
                  />
                </InfoSubIcon>
              </InfoRightSection>
            </InfoCard2>
            <InfoCard3>
              <InfoProfile profile={Yurim} />
              <InfoRightSection>
                <InfoName>장유림</InfoName>
                <br />
                <InfoSubText>
                  팀원
                  <br />
                  전공 : 영화영상학과 / 융합SW
                  <br />
                  학번 : 2017113051
                  <br />
                  키워드 : 걷기, 어학, 음악, 개발
                  <br />
                  TMI : 대만에 가보고 싶습니다.
                  <br />
                </InfoSubText>
                <InfoSubIcon>
                  <FontAwesomeIcon
                    icon={faGithub}
                    onClick={() => window.open('https://github.com/urimJ')}
                  />
                </InfoSubIcon>
              </InfoRightSection>
            </InfoCard3>
            <InfoCard4>
              <InfoProfile profile={Seunghun} />
              <InfoRightSection>
                <InfoName>이승훈</InfoName>
                <br />
                <InfoSubText>
                  팀원
                  <br />
                  전공 : 전자전기공학부
                  <br />
                  학번 : 2018111871
                  <br />
                  키워드 : 러닝, 복싱, 독서, 축구
                  <br />
                  TMI : -
                  <br />
                </InfoSubText>
                <InfoSubIcon>
                  <FontAwesomeIcon
                    icon={faGithub}
                    onClick={() => window.open('https://github.com/bbanset')}
                  />
                </InfoSubIcon>
              </InfoRightSection>
            </InfoCard4>
          </InfoCardSection>
          <GoToNextSection arrow={arrow}>
            Scroll
            <FontAwesomeIcon icon={faSortDown} />
          </GoToNextSection>
        </GuideThirdScene>
        <GuideFourthScene>
          <ProposalGridBox>
            <ProposalGridItem1>
              <ProposalHeader>프로젝트 소개와 기대효과</ProposalHeader>
              <br />
              <ProposalDescription>
                Money Mate는 총 자산을 관리할 수 있는 가계부 웹사이트입니다.
                <br />
                사용자의 자산 관리 효율성을 높이고, 사용자가 자신의 소비습관을
                파악해 합리적인 소비를 할 수 있도록 돕는데 의의가 있습니다.
              </ProposalDescription>
            </ProposalGridItem1>
            <ProposalGridItem2>
              <ProposalHeader>디자인</ProposalHeader>
              <br />
              <ProposalDescription>
                금전과 관련된 서비스임을 고려,
                <br />
                신뢰성과 편안함을 줄 수 있으며 눈의 피로감을 줄여줄 수 있는
                파랑을 메인 컬러로 지정.
              </ProposalDescription>
            </ProposalGridItem2>
            <ProposalGridItem3>
              <ProposalHeader>페이지별 기능</ProposalHeader>
            </ProposalGridItem3>
            <ProposalGridItem4></ProposalGridItem4>
          </ProposalGridBox>
        </GuideFourthScene>
      </GuideContainer>
      <GuideNextButton onClick={handleClick}>NEXT</GuideNextButton>
    </>
  );
};

export default Guide;
