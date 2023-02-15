import { useState, useEffect } from 'react';

import Wrapper from '../assets/wrappers/MainPage';
import { Navbar } from './../components';
import UsersList from './../components/UsersList';

import data from '../data';

const userData = JSON.parse(localStorage.getItem('userData'));

const MainPage = ({ setPage }) => {
  const [user, setUser] = useState(userData);
  const [users, setUsers] = useState(data);

  useEffect(() => {
    if (!user) {
      setPage('landing');
    }
  }, [setPage, user]);


  const delUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <Wrapper>
      <main className='dashboard'>
        <Navbar user={user} setUser={setUser} />
        <div className='dashboard-page'>
          <UsersList users={users} deleteUser={delUser} />
        </div>
      </main>
    </Wrapper>
  );
};

export default MainPage;