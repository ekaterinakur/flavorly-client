import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors/authSelectors';
import { useParams } from 'react-router-dom';
import { fetchUserDetails } from '../../api/user';
import { selectUserById } from '../../redux/slices/usersSlice.js';

function UserProfileCard() {
  let userId;
  const currentUser = useSelector(selectUser);
  const userDetails = useSelector(selectUserById);
  const { id } = useParams(); // ID з URL
  const dispatch = useDispatch();

  console.log(currentUser);
  console.log(userDetails);

  id ? (userId = id) : (userId = currentUser?.id);

  return (
    <div>
      <ul>
        <li>
          <p>Email</p>
        </li>
        <li>
          <p>Added recipes:</p>
        </li>
        <li>
          <p>Favorites:</p>
        </li>
        <li>
          <p>Followers:</p>
        </li>
        <li>
          <p>Following:</p>
        </li>
      </ul>
    </div>
  );
}

export default UserProfileCard;
