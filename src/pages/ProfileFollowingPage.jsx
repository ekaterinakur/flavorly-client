import { useEffect } from 'react';
import UsersList from '../components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/selectors/authSelectors';
import { useParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState/EmptyState';
import {
  selectFollowing,
  selectSubscriptions,
} from '../redux/selectors/subscriptionsSelectors';
import { userFollowing } from '../api/following';
import toast from 'react-hot-toast';
import { selectUserDetails } from '../redux/selectors/userDetailsSelectors';
import { setSubscriptionsPage } from '../redux/slices/subscriptionsSlice';
import { ListPagination } from '../components/ListPagination/ListPagination';
import Loader from '../components/Loader/Loader';

export default function ProfileFollowingPage() {
  const { id: paramId } = useParams();
  const dispatch = useDispatch();

  const current = useSelector(selectUserDetails);
  const isRefreshing = useSelector(selectIsRefreshing);
  const data = useSelector(selectFollowing);
  const followings = data.items;
  const total = data.total;
  const pageLimit = data.limit || 6;
  const totalPages = Math.ceil(total / pageLimit);
  const currentPage = data.page;
  const loading = useSelector(selectSubscriptions).isLoading;
  const error = useSelector(selectSubscriptions).error;

  useEffect(() => {
    const profileId = paramId || current?.id;
    if (!profileId || isRefreshing) return;
    
    dispatch(userFollowing(profileId));
  }, [dispatch, paramId, current?.id, isRefreshing]);

  // Check for error, show toast with message
  useEffect(() => {
    if (error?.message) {
      toast.error(error.message);
    }
  }, [error]);

  if (loading) {
    return <Loader />;
  }

  const handlePageChange = (page) => {
    dispatch(setSubscriptionsPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="">
      {!loading && data?.total === 0 ? (
        <EmptyState message="Your account currently has no subscriptions to other users. Learn more about our users and select those whose content interests you." />
      ) : (
        <UsersList data={followings} isFollowings />
      )}
      {totalPages >= 1 && (
        <ListPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
