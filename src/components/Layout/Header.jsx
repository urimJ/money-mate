import { useContext } from 'react';
import { HeaderSection, HeaderText } from '../LayoutStyle';
import { Context } from '../../context/Context';

const Header = () => {
  const { themeMode } = useContext(Context);
  return (
    <>
      <HeaderSection themeMode={themeMode}>
        <HeaderText
          onClick={() => window.location.replace('/')}
          themeMode={themeMode}
        >
          Money Mate
        </HeaderText>
      </HeaderSection>
    </>
  );
};

export default Header;
