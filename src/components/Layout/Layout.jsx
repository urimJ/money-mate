import Router from '../../../Router';
import { Container } from '../LayoutStyle';
import Header from './Header';
import Logout from './Logout';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Router />
        <Logout />
      </Container>
    </>
  );
};

export default Layout;
