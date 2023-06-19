import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  GoBackButton,
  IconBox,
  NotFoundContainer,
  WarningTextBox,
} from './components/NotFoundStyle';
import { faPersonWalkingArrowLoopLeft } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Layout/Header';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <NotFoundContainer>
        {/* 임시 세팅 */}
        <IconBox>
          <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} />
        </IconBox>
        <WarningTextBox>잘못된 접근이에요</WarningTextBox>
        <GoBackButton onClick={() => navigate('/', { replace: true })}>
          돌아가기
        </GoBackButton>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
