import { HeaderSection, HeaderText } from '../LayoutStyle';

const Header = () => {
  return (
    <>
      <HeaderSection>
        <HeaderText onClick={() => window.location.replace('/')}>
          Money Mate
        </HeaderText>
      </HeaderSection>
    </>
  );
};

export default Header;
