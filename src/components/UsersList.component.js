import User from './User.component';

const UsersList = ({ users, deleteUser }) => {
  return (
    <section className='container'>
      {users.map((user) => {
        return <User key={user.id} {...user} deleteUser={deleteUser} />;
      })}
    </section>
  );
};

export default UsersList;