import { useState } from 'react';

import { FaUserCircle, FaCaretDown } from 'react-icons/fa';

import Wrapper from '../styles/styled/Navbar.styled';
import Logo from './Logo.component';

const Navbar = ({ user, setUser }) => {
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('userData');
  };

  return (
    <Wrapper>
      <div className='nav-center'>
        <div>
          <Logo />
        </div>
        <div className='btn-container'>
          <button
            type='button'
            className='btn'
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              type='button'
              className='dropdown-btn'
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
