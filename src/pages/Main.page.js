import { useState, useEffect } from 'react';

import { PAGES } from '../constants';

import Wrapper from '../styles/styled/Main.styled';
import { Navbar, UsersList } from '../components';

import data from '../data';

const [landing] = PAGES;
const userDate = JSON.parse(localStorage.getItem('userData'));

const Main = ({ setPage }) => {
  const [user, setUser] = useState(userDate);
  const [users, setUsers] = useState(data);

  useEffect(() => {
    if (!user) {
      setPage(landing);
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

export default Main;