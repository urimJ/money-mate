import Router from '../../../Router';
import { Container } from '../LayoutStyle';
import Logout from './Logout';

const Layout = () => {
  return (
    <>
      <Container>
        <Router />
        <Logout />
      </Container>
    </>
  );
};

export default Layout;
