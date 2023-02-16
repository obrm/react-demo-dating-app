import main from '../assets/images/main.svg';
import Wrapper from '../styled/LoginPage';
import { Logo } from '../components';

const Landing = ({ setPage }) => {
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
          <button onClick={() => setPage('login')} className='btn btn-hero'>
            Log In
          </button>
        </div>
        <img src={main} alt='love finding app' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
