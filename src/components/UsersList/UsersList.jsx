import UserCardHorizontal from '../UserCardHorizontal/UserCardHorizontal';

function UsersList({ data, isFollowings, userId }) {
  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>
          <UserCardHorizontal
            user={user}
            isFollowings={isFollowings}
            userId={userId}
          />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
