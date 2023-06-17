import { useState } from 'react';
import GlobalStyle from '../GlobalStyle';
import Layout from './components/Layout/Layout';
import { Context } from './context/Context';
import { useEffect } from 'react';

function App() {
  // User Default Category---------------------------
  const [category, setCategory] = useState([]);
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
  }, []);

  // User LoggedIn-----------------------------------
  const auth = localStorage.getItem('username');
  const [isLoggedIn, setIsLoggedIn] = useState(auth);

  // User Theme--------------------------------------
  const [darkTheme, setDarkTheme] = useState(false);

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
