import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Main, Landing, Login } from './pages';

import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
