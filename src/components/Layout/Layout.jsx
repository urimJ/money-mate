import Router from '../../../Router';
import { Container } from '../LayoutStyle';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Router />
      </Container>
    </>
  );
};

export default Layout;
