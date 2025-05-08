import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoriteRecipes,
  selectRecipesError,
  selectRecipesLoading,
  selectRecipesPage,
  selectRecipesTotal,
} from '../redux/selectors/recipesSelectors.js';
import { RecipeList } from '../components/RecipeList/RecipeList.jsx';
import { fetchFavoriteRecipes } from '../api/recipes.js';
import { useEffect } from 'react';
import { ListPagination } from '../components/ListPagination/ListPagination.jsx';
import { setRecipesPage } from '../redux/slices/recipesSlice.js';
import Loader from '../components/Loader/Loader.jsx';
import EmptyState from '../components/EmptyState/EmptyState.jsx';
import toast from 'react-hot-toast';

export default function ProfileRecipesPage() {
  const favoriteRecipes = useSelector(selectFavoriteRecipes);
  const currentPage = useSelector(selectRecipesPage);
  const total = useSelector(selectRecipesTotal);
  const perPageLimit = 9;
  const totalPages = Math.ceil(total / perPageLimit);
  const loading = useSelector(selectRecipesLoading);
  const error = useSelector(selectRecipesError);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedPage = Number(localStorage.getItem('myRecipesPage')) || 1;
    dispatch(setRecipesPage(savedPage));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFavoriteRecipes({ page: currentPage, perPageLimit }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    localStorage.setItem('myRecipesPage', page);
    dispatch(fetchFavoriteRecipes({ page, perPageLimit }));
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('myRecipesPage');
    };
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && toast.error(error.message)}
      {!loading && favoriteRecipes.length === 0 ? (
        <EmptyState message="Nothing has been added to your favorite recipes list yet. Please browse our recipes and add your favorites for easy access in the future." />
      ) : (
        <RecipeList items={favoriteRecipes} columns={1} cardType="vertical" />
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
