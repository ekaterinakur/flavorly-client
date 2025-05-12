import { subscribeToUser } from '../api/subscribe';
import { unsubscribeFromUser } from '../api/unsubscribe';
import { userFollowers } from '../api/followers'; 
import { userDetails } from '../api/userDetails';
import toast from 'react-hot-toast';

// Need refactoring
export const handleFollow = async (dispatch, id, isOwner) => {
  try {
    await dispatch(subscribeToUser(id)).unwrap();
    if (!isOwner) {
      dispatch(userDetails(id));
      dispatch(userFollowers(id));
      toast.success(`You follow user now`);
    }
  } catch (err) {
    toast.error("Failed to follow user");
  }
};

export const handleUnfollow = async (dispatch, id, isOwner) => {
  try {
    await dispatch(unsubscribeFromUser(id)).unwrap();

    if (!isOwner) {
      dispatch(userDetails(id));
      dispatch(userFollowers(id));
      toast.success('Unfollowed from user');
    }
  } catch (err) {
    toast.error("Failed to unfollow user");
  }
};
