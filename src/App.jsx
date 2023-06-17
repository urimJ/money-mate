import { useState } from 'react';
import GlobalStyle from '../GlobalStyle';
import Layout from './components/Layout/Layout';
import { Context } from './context/Context';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../theme';

function App() {
  // User Default Category---------------------------
  const [category, setCategory] = useState([]);

  // User Theme--------------------------------------
  const [themeMode, setThemeMode] = useState(Boolean);

  // User LoggedIn-----------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean);

  // ComponentDidMount-------------------------------
  useEffect(() => {
    const storedCategory = localStorage.getItem('category');
    // 초기 카테고리 설정
    if (!storedCategory) {
      const initialCategory = [
        { category: '식비' },
        { category: '교통비' },
        { category: '문화 여가비' },
        { category: '유흥비' },
        { category: '교육비' },
      ];
      localStorage.setItem('category', JSON.stringify(initialCategory));
      setCategory(initialCategory);
    } else {
      setCategory(JSON.parse(storedCategory));
    }

    // 초기 테마 설정
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      const initialTheme = false;
      localStorage.setItem('theme', initialTheme);
      setThemeMode(initialTheme);
    } else {
      setThemeMode(storedTheme);
    }

    // 초기 로그인 유무 설정
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  const theme = themeMode === true ? dark : light;
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <Context.Provider
          value={{
            isLoggedIn,
            setIsLoggedIn,
            themeMode,
            setThemeMode,
            category,
            setCategory,
          }}
        >
          <GlobalStyle />
          <Layout />
        </Context.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
