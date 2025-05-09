import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/selectors/authSelectors';
import { openSignInModal } from '../redux/slices/modalSlice';
import { useNavigate } from 'react-router-dom';

export function useAuthor({ id }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleClick = () => {
    if (isLoggedIn) {
      navigate(`/profile/${id}`);
    } else {
      dispatch(openSignInModal());
    }
  };

  return {
    handleClick,
  };
}
