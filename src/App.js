import { useState, useEffect } from 'react';

import { PAGES } from './constants';
import { MainPage, Landing, Login } from './pages';

import './styles/App.css'

const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;

const App = () => {
  const [page, setPage] = useState('landing');

  const [landing, login, main] = PAGES;

  useEffect(() => {
    if (!userData) {
      setPage(landing);
    } else {
      setPage(main);
    }
  }, [landing, main]);

  switch (page) {
    case landing:
      return <Landing setPage={setPage} />;
    case login:
      return <Login setPage={setPage} />;
    case main:
      return <MainPage setPage={setPage} />;
    default:
      return <Landing setPage={setPage} />;
  }
};

export default App;
