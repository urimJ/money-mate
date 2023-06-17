import { useState } from 'react';
import GlobalStyle from '../GlobalStyle';
import Layout from './components/Layout/Layout';
import { Context } from './context/Context';
import { useEffect } from 'react';

function App() {
  // User Default Category---------------------------
  const [category, setCategory] = useState([]);

  // User Theme--------------------------------------
  const [darkTheme, setDarkTheme] = useState(Boolean);

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
    const storedDarkTheme = localStorage.getItem('dark-theme');
    if (!storedDarkTheme) {
      const initialDarkTheme = false;
      localStorage.setItem('dark-theme', initialDarkTheme);
      setDarkTheme(initialDarkTheme);
    } else {
      setDarkTheme(storedDarkTheme);
    }

    // 초기 로그인 유무 설정
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          darkTheme,
          setDarkTheme,
          category,
          setCategory,
        }}
      >
        <GlobalStyle />
        <Layout />
      </Context.Provider>
    </>
  );
}

export default App;
