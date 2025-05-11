import { useEffect } from 'react';
import UsersList from '../components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { userFollowers } from '../api/followers';
import { userDetails } from '../api/userDetails';
import { selectIsRefreshing } from '../redux/selectors/authSelectors';
import { useParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState/EmptyState';
import { currentUser } from '../api/current';
import { selectFollowers } from '../redux/selectors/subscriptionsSelectors';
import { userFollowing } from '../api/following';
import toast from 'react-hot-toast';
import { selectUserDetails } from '../redux/selectors/userDetailsSelectors';

export default function ProfileFollowersPage() {
  const { id: paramId } = useParams();
  const dispatch = useDispatch();

  const current = useSelector(selectUserDetails);
  const isRefreshing = useSelector(selectIsRefreshing);
  const followers = useSelector(selectFollowers);
  const loading = followers.loading;
  const error = followers.error;

  useEffect(() => {
    console.log(current);
    if (!current) {
      dispatch(currentUser());
    }
  }, [dispatch, current]);

  useEffect(() => {
    const profileId = paramId || current?.id;
    if (!profileId || isRefreshing) return;

    dispatch(userDetails(profileId));
    dispatch(userFollowers(profileId));
    dispatch(userFollowing(profileId));
  }, [dispatch, paramId, current?.id, isRefreshing]);

  // Check for error, show toast with message
  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error]);

  // Show loader
  if (loading) {
    return <>{loading && <Loader />}</>;
  }

  return (
    <div className="">
      {!loading && followers.length === 0 ? (
        <EmptyState message="There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile." />
      ) : (
        <UsersList data={followers} />
      )}
      {/* {totalPages >= 1 && (
        <ListPagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )} */}
    </div>
  );
}
