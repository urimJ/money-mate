import { AccountsContainer } from './components/AccountsStyle';

const Accounts = () => {
  const userName = localStorage.getItem('username');
  return (
    <>
      <AccountsContainer>{userName}님의 가계부</AccountsContainer>
    </>
  );
};

export default Accounts;
