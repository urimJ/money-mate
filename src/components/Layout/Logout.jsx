import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogoutButton } from '../LayoutStyle';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Logout = () => {
  const auth = localStorage.getItem('username');
  const handleClick = () => {
    if (window.confirm('정말 로그아웃하시겠습니까?')) {
      localStorage.clear();
      window.location.replace('/');
    } else {
      return;
    }
  };
  return (
    <>
      <LogoutButton onClick={handleClick} auth={auth}>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </LogoutButton>
    </>
  );
};

export default Logout;
