import { useEffect } from 'react';
import UsersList from '../components/UsersList/UsersList';
import { useDispatch, useSelector } from 'react-redux';
import { userFollowers } from '../api/followers';
import { selectIsRefreshing, selectUser } from '../redux/selectors/authSelectors';
import { useParams } from 'react-router-dom';
import EmptyState from '../components/EmptyState/EmptyState';
import {
  selectFollowers,
  selectSubscriptions,
} from '../redux/selectors/subscriptionsSelectors';
import toast from 'react-hot-toast';
import { selectUserDetails } from '../redux/selectors/userDetailsSelectors';
import { setSubscriptionsPage } from '../redux/slices/subscriptionsSlice';
import { ListPagination } from '../components/ListPagination/ListPagination';
import Loader from '../components/Loader/Loader';

export default function ProfileFollowersPage() {
  const { id: paramId } = useParams();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const current = useSelector(selectUserDetails);
  const isRefreshing = useSelector(selectIsRefreshing);
  const data = useSelector(selectFollowers);
  const followers = data.items;
  const total = data.total;
  const pageLimit = data.limit || 6;
  const totalPages = Math.ceil(total / pageLimit);
  const currentPage = data.page;
  const loading = useSelector(selectSubscriptions).isLoading;
  const error = useSelector(selectSubscriptions).error;

  useEffect(() => {
    const profileId = paramId || current?.id;
    if (!profileId || isRefreshing) return;
    
    dispatch(userFollowers(profileId));
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
      {!loading && total === 0 ? (
        <EmptyState message="There are currently no followers on your account. Please engage our visitors with interesting content and draw their attention to your profile." />
      ) : (
        <UsersList data={followers} userId={user?.id} />
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
