import { useState } from 'react';
import GlobalStyle from '../GlobalStyle';
import Layout from './components/Layout/Layout';
import { Context } from './context/Context';

function App() {
  const auth = localStorage.getItem('username');
  const [isLoggedIn, setIsLoggedIn] = useState(auth);
  const [darkTheme, setDarkTheme] = useState(false);
  // console.log('로그인 유저', isLoggedIn);
  return (
    <>
      
        <Context.Provider
          value={{ isLoggedIn, setIsLoggedIn, darkTheme, setDarkTheme }}
        >
          <GlobalStyle />
          <Layout />
        </Context.Provider>
      
    </>
  );
}

export default App;
