import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Wrapper from '../styles/styled/Main.styled';
import { Navbar, UsersList } from '../components';

import data from '../data';

const userDate = JSON.parse(localStorage.getItem('userData'));

const Main = () => {
  const [user, setUser] = useState(userDate);
  const [users, setUsers] = useState(data);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {    
      navigate('/');
    }
  }, [navigate, user]);


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