import { BsFillSuitHeartFill } from 'react-icons/bs';

const User = ({ id, image, firstName, lastName, city, deleteUser }) => {
  return (
    <article className='card'>
      <img src={image} alt={`${firstName} ${lastName}`} />
      <h4>{firstName} {lastName}</h4>
      <h5>{city}</h5>
      <button className='btn btn-transparent mt' onClick={() => deleteUser(id)} >
        <BsFillSuitHeartFill />
      </button>
    </article>
  );
};

export default User;