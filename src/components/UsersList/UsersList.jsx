import UserCardHorizontal from '../UserCardHorizontal/UserCardHorizontal';

function UsersList({ data }) {
  // console.log(data);
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          <UserCardHorizontal user={user} />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
