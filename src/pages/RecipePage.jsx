import { useParams } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs';
import { RecipeInfo } from '../components/RecipeInfo/RecipeInfo';
import { PopularRecipes } from '../components/PopularRecipes/PopularRecipes';
import { useGetRecipeQuery } from '../redux/slices/apiSlice';
import Loader from '../components/Loader/Loader';

export default function RecipePage() {
  const { id } = useParams();
  const { data, status } = useGetRecipeQuery(id, {
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 0,
  });

  return (
    <div className="container main-container">
      {status === 'pending' ? (
        <Loader />
      ) : (
        <>
          {data ? (
            <>
              <BreadCrumbs breadcrumbs={data.title} />
              <RecipeInfo recipe={data} />
            </>
          ) : null}
        </>
      )}

      <PopularRecipes />
    </div>
  );
}
