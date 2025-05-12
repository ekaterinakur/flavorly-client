import { subscribeToUser } from '../api/subscribe';
import { unsubscribeFromUser } from '../api/unsubscribe';
import { userFollowers } from '../api/followers';
import { userFollowing } from '../api/following';
import { userDetails } from '../api/userDetails';
import toast from 'react-hot-toast';

// Need refactoring
export const handleFollow = async (dispatch, id, isOwner) => {
  try {
    await dispatch(subscribeToUser(id)).unwrap();
    if (!isOwner) {
      dispatch(userDetails(id));
      dispatch(userFollowing());
      dispatch(userFollowers(id));
      toast.success(`You follow user now`);
    }
  } catch (err) {
    // console.error(err);
    toast.error(err);
  }
};

export const handleUnfollow = async (dispatch, id, isOwner) => {
  try {
    await dispatch(unsubscribeFromUser(id)).unwrap();

    if (!isOwner) {
      dispatch(userDetails(id));
      dispatch(userFollowing());
      dispatch(userFollowers(id));
      toast.success('Unfollowed from user');
    }
  } catch (err) {
    // console.error(err);
    toast.error(err);
  }
};
