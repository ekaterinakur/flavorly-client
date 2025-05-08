import { useDispatch, useSelector } from 'react-redux';
import {
  selectMyRecipes,
  selectRecipesPage,
  selectRecipesTotal,
} from '../redux/selectors/recipesSelectors.js';
import { RecipeList } from '../components/RecipeList/RecipeList.jsx';
import { fetchMyRecipes } from '../api/recipes.js';
import { useEffect } from 'react';
import { ListPagination } from '../components/ListPagination/ListPagination.jsx';
import { setRecipesPage } from '../redux/slices/recipesSlice.js';

export default function ProfileRecipesPage() {
  const myRecipes = useSelector(selectMyRecipes);
  const currentPage = useSelector(selectRecipesPage);
  const total = useSelector(selectRecipesTotal);
  const perPageLimit = 9;
  const totalPages = Math.ceil(total / perPageLimit);

  const dispatch = useDispatch();

  useEffect(() => {
    const savedPage = Number(localStorage.getItem('myRecipesPage')) || 1;
    dispatch(setRecipesPage(savedPage));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMyRecipes({ page: currentPage, perPageLimit }));
  }, [dispatch, currentPage]);

  const handlePageChange = (page) => {
    localStorage.setItem('myRecipesPage', page);
    dispatch(fetchMyRecipes({ page, perPageLimit }));
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // плавна прокрутка
    });
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('myRecipesPage');
    };
  }, []);

  return (
    <div>
      <RecipeList items={myRecipes} columns={1} cardType="vertical" />
      <ListPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
