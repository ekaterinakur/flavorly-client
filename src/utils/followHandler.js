import { subscribeToUser } from '../api/subscribe';
import { unsubscribeFromUser } from '../api/unsubscribe';
import { userFollowing } from '../api/following';

export const handleFollow = async (dispatch, id) => {
  try {
    await dispatch(subscribeToUser(id)).unwrap();
    dispatch(userFollowing());
  } catch (err) {
    console.error(err);
  }
};

export const handleUnfollow = async (dispatch, id) => {
  try {
    await dispatch(unsubscribeFromUser(id)).unwrap();
    dispatch(userFollowing());
  } catch (err) {
    console.error(err);
  }
};
