import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoutButton } from '../LayoutStyle';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Logout = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(Context);
  const handleClick = () => {
    if (window.confirm('정말 로그아웃하시겠습니까?')) {
      setIsLoggedIn(false);
      localStorage.clear();
      window.location.replace('/');
    } else {
      return;
    }
  };
  return (
    <>
      <LogoutButton onClick={handleClick} isLoggedIn={isLoggedIn}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </LogoutButton>
    </>
  );
};

export default Logout;
