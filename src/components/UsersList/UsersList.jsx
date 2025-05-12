import UserCardHorizontal from '../UserCardHorizontal/UserCardHorizontal';

function UsersList({ data, isOwner }) {
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          <UserCardHorizontal user={user} isOwner={isOwner} />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
