import { Link } from 'react-router-dom';

import main from '../assets/images/main.svg';
import Wrapper from '../styles/styled/Landing.styled';
import { Logo } from '../components';


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Love <span>finding</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi laboriosam eaque quisquam dicta, ea natus earum commodi molestiae autem soluta fuga illum enim, eum esse!
          </p>
          <Link to='/login' className='btn btn-hero'>
            Log In
          </Link>
        </div>
        <img src={main} alt='love finding app' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
